import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract DayNFT is ERC721Token {
    //pass through constructor, remove?
    constructor(string _name, string _symbol)
        public
        ERC721Token(_name, _symbol)
    {}

    /// wrapper on minting new 721
    function mint721(address ownerWeekNFT) public returns (uint256) {
        _mint(ownerWeekNFT, allTokens.length + 1);
        //assignNFTToTeam(_to,ownerTeamNFT,allTokens.length);
        return allTokens.length;
    }


    struct Day {
      uint256 id;
      uint256 weekId;
      uint256 teamId;
      uint256 date;
      string jsonUrl;
      bool exists;
      uint256 price;
    }
}