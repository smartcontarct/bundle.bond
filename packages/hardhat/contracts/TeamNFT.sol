pragma solidity ^0.4.21;

import "./ComposableTopDown.sol";

contract TeamNFT is ComposableTopDown {
    address owner;
    uint256 public totalTeams;
    mapping(uint256 => Team) private _teamById;

    // function addTeamOwner(address account) public {}

    // function approveTeamOwner(address account) public {}

    // function addCustomer(address account) public {}

    // function approveCustomer(address account) public {}

    struct Team {
        uint256 id;
        address teamOwner;
        string name;
        string TeamUrl;
        bool exists;
    }

    function _createTeam(
        uint256 _id,
        string memory _TeamUrl,
        string memory _name,
        address _teamOwner
    ) public returns (uint256) {
        totalTeams++;

        Team memory _Team = Team({
            id: _id,
            teamOwner: _teamOwner,
            name: _name,
            TeamUrl: _TeamUrl,
            exists: true
        });
        _teamById[_id] = _Team;
        return _Team.id;
    }

    function mintTeamToken(
        address teamOwner,
        string name,
        string metadata //isTeamOwner(teamOwner)
    ) public returns (uint256) {
        uint256 teamId = mint(teamOwner, metadata);
        _createTeam(teamId, metadata, name, teamOwner);
        return teamId;
    }

    function evaluateTeam(uint256 teamId, address projectAddress) public {}

    function getTeamCount() public view returns (uint256 teamCount) {
        return tokenCount;
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
        Team storage team = _teamById[teamId];
        //string storage teamURI = tokenURI(teamId);
        return (team.id, team.teamOwner, team.name, team.TeamUrl, team.exists);
    }
}
