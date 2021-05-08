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
}

contract BundleBond is RBAC {
    ITeamNFT TEAM;
    IWeekNFT WEEK;
    address TeamContractAddress;
    address weekContractAddress;
    mapping(address => Customer) customerList;
    mapping(address => TeamOwner) TeamOwnerList;
    mapping(uint256 => Project) projectList;
    uint256 lastProjectId;

    constructor(address _team, address _week) public {
        TEAM = ITeamNFT(_team);
        WEEK = IWeekNFT(_week);
        TeamContractAddress = _team;
        weekContractAddress = _team;
        lastProjectId = 0;
    }

    struct Customer {
        string name;
        bool exists;
    }

    struct TeamOwner {
        string name;
        bool exists;
    }

    function addCustomer(string _customerName, address _customerAddress) {
        Customer storage c = customerList[_customerAddress];
        if (!c.exists) {
            customerList[_customerAddress] = Customer({
                exists: true,
                name: _customerName
            });
            addRole(_customerAddress, "CUSTOMER");
        }
    }

    function addTeamOwner(string _teamOwnerName, address _teamOwnerAddress) public{
        TeamOwner storage t = TeamOwnerList[_teamOwnerAddress];
        if (!t.exists) {
            TeamOwnerList[_teamOwnerAddress] = TeamOwner({
                exists: true,
                name: _teamOwnerName
            });
            addRole(_teamOwnerAddress, "TEAM_OWNER");
        }
    }

    function addTeam(
        address teamOwner,
        string teamName,
        string metadata
    ) {
        TEAM.mintTeamToken(teamOwner, teamName, metadata);
    }

    function addWeek(uint256 _teamTokenId, address teamOwnerAddress) {
        WEEK.mint721(TeamContractAddress, _teamTokenId, teamOwnerAddress);
    }

    function sellWeekNFT(
        uint256 teamTokenId,
        uint256 weekTokenId,
        address to
    ) {
        TEAM.transferChild(teamTokenId, to, weekContractAddress, weekTokenId);
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

    struct Project {
        string name;
        address projectAddress;
        address projectOwner;
    }

    function AddCustomer(string name) public {}

    function CreateProject(string name) public {}
}
