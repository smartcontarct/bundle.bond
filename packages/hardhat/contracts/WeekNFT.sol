pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract WeekNFT is ERC721Token {
    //pass through constructor, remove?
    constructor()
        public
        ERC721Token("WeekNFT", "WNFT")
    {
        totalWeeks = 0;
    }

    uint256 public totalWeeks;

    mapping(uint256 => Week) private _weekById;

    mapping(uint256 => mapping(address => Bid)) BidList;

    /// wrapper on minting new 721
    function mint721(
        address _teamContract,
        uint256 _teamTokenId,
        address userAddress,
        string metadata,
        uint256 _WeekNo,
        uint256 _Year
    ) public returns (uint256) {
        _mint(userAddress, allTokens.length + 1);
        assignNFTToTeam(
            _teamContract,
            _teamTokenId,
            allTokens.length,
            userAddress
        );
        _createWeek(
            allTokens.length,
            metadata,
            _teamTokenId,
            _teamContract,
            _WeekNo,
            _Year
        );
        return allTokens.length;
    }

    function placeBid(
        uint256 weekTokenId,
        address bidder,
        uint256 price
    ) public {
        BidList[weekTokenId][bidder] = Bid({
            weekId: weekTokenId,
            price: price,
            Bidder: bidder
        });
    }

    function _createWeek(
        uint256 _id,
        string memory _WeekUrl,
        uint256 _teamTokenId,
        address _teamContract,
        uint256 _WeekNo,
        uint256 _Year
    ) public returns (uint256) {
        totalWeeks++;

        Week memory _Week = Week({
            id: _id,
            teamId: _teamTokenId,
            weekOwner: _teamContract,
            WeekUrl: _WeekUrl,
            exists: true,
            price: 0,
            WeekNo: _WeekNo,
            Year: _Year
        });
        _weekById[_id] = _Week;
        return _Week.id;
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
        Week storage week = _weekById[weekId];
        //string storage teamURI = tokenURI(teamId);
        return (week.id, week.teamId, week.weekOwner, week.exists, week.WeekUrl, week.price, week.WeekNo, week.Year);
    }

    function assignNFTToTeam(
        address _teamContract,
        uint256 _teamTokenId,
        uint256 _weekTokenId,
        address userAddress
    ) public {
        uint256 teamTokenId = _teamTokenId;
        bytes memory tokenIdBytes = new bytes(32);
        assembly {
            mstore(add(tokenIdBytes, 32), teamTokenId)
        }
        safeTransferFrom(
            userAddress,
            _teamContract,
            _weekTokenId,
            tokenIdBytes
        );
    }

    function transferWeekNFTOnBid(
        uint256 weekTokenId,
        address from,
        address to
    ) {
        safeTransferFrom(from, to, weekTokenId);
    }

    struct Week {
        uint256 id;
        uint256 teamId;
        address weekOwner;
        bool exists;
        string WeekUrl;
        uint256 price;
        uint256 WeekNo;
        uint256 Year;
    }

    struct Bid {
        uint256 weekId;
        uint256 price;
        address Bidder;
    }
}
