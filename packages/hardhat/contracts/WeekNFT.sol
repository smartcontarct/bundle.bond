pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract WeekNFT is ERC721Token {
    //pass through constructor, remove?
    constructor(string _name, string _symbol)
        public
        ERC721Token(_name, _symbol)
    {}

    /// wrapper on minting new 721
    function mint721(
        address _teamContract,
        uint256 _teamTokenId,
        address userAddress
    ) public returns (uint256) {
        _mint(userAddress, allTokens.length + 1);
        assignNFTToTeam(
            _teamContract,
            _teamTokenId,
            allTokens.length,
            userAddress
        );
        return allTokens.length;
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

    struct Week {
        uint256 id;

        uint256 teamId;
        bool exists;
        uint256 price;
        uint256 startDate;
        uint256 endDate;
    }
}
