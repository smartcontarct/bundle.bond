pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/access/rbac/RBAC.sol";

interface ITeamNFT {
    function _createTeam(
        uint256 _id,
        string memory _TeamUrl,
        string memory _name,
        address _teamOwner
    ) public returns (uint256);

    function mintTeamToken(
        address teamOwner,
        string name,
        string metadata //isTeamOwner(teamOwner)
    ) public returns (uint256);

    function evaluateTeam(uint256 teamId, address projectAddress) public;

    function getTeamCount() public view returns (uint256 teamCount);

    function transferChild(
        uint256 _fromTokenId,
        address _to,
        address _childContract,
        uint256 _childTokenId
    );

    function getTeamById(uint256 teamId)
        public
        view
        returns (
            uint256 id,
            address teamOwner,
            string name,
            string TeamUrl,
            bool exists
        );
}

interface IWeekNFT {
    /// wrapper on minting new 721
    function mint721(
        address _teamContract,
        uint256 _teamTokenId,
        address userAddress
    ) public returns (uint256);

    function assignNFTToTeam(
        address _teamContract,
        uint256 _teamTokenId,
        uint256 _weekTokenId,
        address userAddress
    ) public;

    function placeBid(
        uint256 weekTokenId,
        address bidder,
        uint256 price
    ) public;
        function transferWeekNFTOnBid(
        uint256 weekTokenId,
        address from,
        address to
    );
    function getWeekById(uint256 weekId)
        public
        view
        returns (
        uint256 id,
        uint256 teamId,
        address weekOwner,
        bool exists,
        string WeekUrl,
        uint256 price,
        uint256 WeekNo,
        uint256 Year
        );
}

contract BundleBond is RBAC {
    ITeamNFT TEAM;
    IWeekNFT WEEK;
    address TeamContractAddress;
    address weekContractAddress;
    mapping(address => Admin) AdminList;
    mapping(address => TeamOwner) TeamOwnerList;
    mapping(uint256 => Project) projectList;
    mapping(uint256 => Offer) offerList;
    uint256 lastProjectId;
    uint256 lastOfferId;

    struct Project {
        string name;
        address projectAddress;
        address projectOwner;
    }

    struct Offer {
        uint256 WeekId;
        address fromAddress;
        address ownerAddress;
        bool accepted;
    }



    modifier  onlyAdmin() {
       hasRole(msg.sender, "Admin");
       _;
    }
    modifier  onlyTeamOwner() {
       hasRole(msg.sender, "TEAM_OWNER");
       _;
    }

    constructor(address _team, address _week) public {
        TEAM = ITeamNFT(_team);
        WEEK = IWeekNFT(_week);
        TeamContractAddress = _team;
        weekContractAddress = _team;
        lastProjectId = 0;
        lastOfferId=0;
        addRole(msg.sender, "Admin");

    }

    struct Admin {
        string name;
        bool exists;
    }

    struct TeamOwner {
        string name;
        bool exists;
    }

    function  isAdmin() 
    public
    returns (bool)
    {
       return hasRole(msg.sender, "Admin");
    }

    function addAdmin(string _adminName, address _adminAddress) 
    {
        Admin storage t = AdminList[_adminAddress];
        if (!t.exists) {
            AdminList[_adminAddress] = Admin({
                exists: true,
                name: _adminName
            });
            addRole(_adminAddress, "Admin");
        }
    }

    function editAdminName(string _adminName, address _adminAddress) 
    {
        Admin storage t = AdminList[_adminAddress];
        if (t.exists) {
            AdminList[_adminAddress].name = _adminName;
        }
    }

    function getAdminName(address _adminAddress)  
    view
    returns (string){
        Admin storage admin = AdminList[_adminAddress];
        if (admin.exists) {
            return AdminList[_adminAddress].name;
        }
        return "";
    }


    function  isTeamOwner() 
    public
    returns(bool)
    {
       return hasRole(msg.sender, "TEAM_OWNER");
    }

    function addTeamOwner(string _teamOwnerName, address _teamOwnerAddress) 
    {
        TeamOwner storage t = TeamOwnerList[_teamOwnerAddress];
        if (!t.exists) {
            TeamOwnerList[_teamOwnerAddress] = TeamOwner({
                exists: true,
                name: _teamOwnerName
            });
            addRole(_teamOwnerAddress, "TEAM_OWNER");
        }
    }

    function editTeamOwnerName(string _teamOwnerName, address _teamOwnerAddress) 
    {
        TeamOwner storage t = TeamOwnerList[_teamOwnerAddress];
        if (t.exists) {
            TeamOwnerList[_teamOwnerAddress].name = _teamOwnerName;
        }
    }
    function getTeamOwnerName(address _teamOwnerAddress)  
    view
    returns (string){
        TeamOwner storage t = TeamOwnerList[_teamOwnerAddress];
        if (t.exists) {
            return TeamOwnerList[_teamOwnerAddress].name;
        }
        return "";
    }

    function addTeam(
        address teamOwner,
        string teamName,
        string metadata)
    returns(uint256)
    {
        return TEAM.mintTeamToken(teamOwner, teamName, metadata);
    }
    
    function getTeamCount() 
    public 
    view 
    returns (uint256 teamCount)
    {
        return TEAM.getTeamCount();
    }

    function getTeamById(uint256 teamId) 
    public 
    view 
    returns (
            uint256 id,
            address teamOwner,
            string name,
            string TeamUrl,
            bool exists
        )
    {
        return TEAM.getTeamById(teamId);
    }

    function addWeek(uint256 _teamTokenId, address teamOwnerAddress) {
        WEEK.mint721(TeamContractAddress, _teamTokenId, teamOwnerAddress);
    }

    function getWeekById(uint256 weekId)
        public
        view
        returns (
        uint256 id,
        uint256 teamId,
        address weekOwner,
        bool exists,
        string WeekUrl,
        uint256 price,
        uint256 WeekNo,
        uint256 Year
        )
    {
        return WEEK.getWeekById(weekId);    
    }




    function purchaseWeekOfTeam(
        uint256 teamTokenId,
        uint256 weekTokenId)
    public
    payable
    
    {
        //price to team
        //NFT update (set owner)
        var ( teamId,teamOwner, name, TeamUrl, teamExists)=getTeamById(teamTokenId);
        var ( weekId, weekTeamId, weekOwner, weekExists, WeekUrl, price,WeekNo,Year)=getWeekById(teamTokenId);
        require(msg.value >= (price), "The value is " );

        uint256 amountToRefund = msg.value - price; 
        msg.sender.transfer(amountToRefund); 
        weekOwner.transfer(price); 

        sellWeekNFT(teamTokenId, weekTokenId,msg.sender );
    }

    function sellWeekNFT(
        uint256 teamTokenId,
        uint256 weekTokenId,
        address to
    ) 
    {

        TEAM.transferChild(teamTokenId, to, weekContractAddress, weekTokenId);
    }


    function makeAnOffer(
        uint256 weekTokenId)
    public
    payable
    {
        //price to contract
        //offer map update
        var ( weekId, teamId, weekOwner, exists, WeekUrl, price,WeekNo,Year)=getWeekById(weekTokenId);
        require(msg.value >= (price), "The value is " );

        uint256 amountToRefund = msg.value - price; 
        msg.sender.transfer(amountToRefund); 

        Offer storage o = offerList[lastOfferId];
            offerList[lastOfferId] = Offer({
                WeekId:weekTokenId,
                fromAddress:msg.sender,
                ownerAddress:weekOwner,
                accepted:false
        });
        lastOfferId=lastOfferId+1;
        
    }
    function acceptAnOffer(uint256 offerID)
    public
    payable
    {
        //price to prev owner
        //change offer status
        //call transferWeekNFTOnBid
        var ( weekId, teamId, weekOwner, exists, WeekUrl, price,WeekNo,Year)=getWeekById(offerList[offerID].WeekId);
        offerList[offerID].ownerAddress.transfer(price);
        offerList[offerID].accepted = true;
        transferWeekNFTOnBid( offerList[offerID].WeekId,offerList[offerID].fromAddress, offerList[offerID].ownerAddress );
    }

    function rejectAnOffer(uint256 offerID)
    public
    payable
    {
        var ( weekId, teamId, weekOwner, exists, WeekUrl, price,WeekNo,Year)=getWeekById(offerList[offerID].WeekId);

        offerList[offerID].fromTransfer.transfer(price);
    }


    function transferWeekNFTOnBid(
        uint256 weekTokenId,
        address from,
        address to
    ) {
        WEEK.transferWeekNFTOnBid(weekTokenId,from,to);
    }    

    function placeBidOnWeekNFT(
        uint256 weekTokenId,
        address bidder,
        uint256 price
    ) public {
        WEEK.placeBid(weekTokenId, bidder, price);
    }
    function AddProjectToResume(string _name, address _projectAddress) 
    public 
    {
            projectList[lastProjectId] = Project({
                name: _name,
                projectAddress:_projectAddress,
                projectOwner:msg.sender
            });
            lastProjectId=lastProjectId+1;
    }
}
