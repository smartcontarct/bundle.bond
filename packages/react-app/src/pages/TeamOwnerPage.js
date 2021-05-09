import bundlebond from '../bundlebond.png';
import '../App.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CardDeck from 'react-bootstrap/CardDeck';
import React, { Component, useState } from "react";
import history from '../utils/history';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import AssetCard from '../Cards/AssetCard';
//import RequestedAssetCard from '../Cards/RequestedAssetCard';
import weekcontract from '../utils/weekcontract.js';
import bundlebondcontract from '../utils/bundlebondcontract.js';
import teamcontract from '../utils/teamcontract.js';
//import Pagination from 'react-bootstrap/Pagination';
import web3 from '../utils/web3';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import WeekPicker from './WeekPicker'



class TeamOwnerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: {},
            teamCount: 0,
            selectedAccoutnt: "0x0000000000000000000000000000000000000000",
        };
        this.getTeamInfo();
        // this.state = {
        //   Donations: [],
        //   asset: [],
        //   Requests: [],
        //   donor: {},
        //   pageCount: 0,
        //   querized: false,
        //   selectedAccoutnt: "0x0000000000000000000000000000000000000000",
        //   renderCards: false
        // };
        //his.getDonor();
    }
    componentDidMount() {
        setInterval(async () => {
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            this.setState({ selectedAccoutnt: account });
        }, 1000)
    }
    getTeamInfo = async () => {


        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        this.setState({ selectedAccoutnt: account });
        console.log('teamcontract');
        console.log(teamcontract);
        const gasAmount1 = await teamcontract.methods.getTeamCount().estimateGas({ from: account });
        const getTeamCount = await teamcontract.methods.getTeamCount().call({
            from: account,
            gasAmount1,
        });
        console.log('getTeamCount');
        console.log(getTeamCount);
        this.setState({ teamCount: getTeamCount })
        const gasAmount = await teamcontract.methods.getTeamById(getTeamCount).estimateGas({ from: account });
        const result = await teamcontract.methods.getTeamById(getTeamCount).call({
            from: account,
            gasAmount,
        });
        console.log('getDonor');
        console.log(result);
        this.setState({ team: result });
    }


    CreateWeekNFT = async (t) => {
        //t.preventDefault();
        this.setState({ buttonDisabled: true });
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        console.log("account");
        console.log(account);
        this.setState({ selectedAccoutnt: account });
        //const account = await web3.givenProvider.selectedAddress;//accounts[0];
        console.log('selectedAddress');
        console.log(account);
        const gasAmount = await weekcontract.methods.mint721(
            '0x357741ef5135481f948b3DA5Da3F57Deb3656536',
            this.state.teamCount,
            account,
            "metadata",
            2,
            2021).estimateGas({ from: account });
        const result = await weekcontract.methods.mint721(
            '0x357741ef5135481f948b3DA5Da3F57Deb3656536',
            this.state.teamCount,
            account,
            "metadata",
            2,
            2021).send({
                from: account,
                gasAmount,
            });

        // this.setState({ buttonDisabled: false });
        // console.log('result');
        // console.log(result);
        // this.setState({ buttonDisabled: false });
    }
    //   getAssets = async (t) => {

    //     t.preventDefault();
    //     console.log("getAssets");
    //     console.log("Contract Balance");
    //     //window.alert(1);
    //     web3.eth.getBalance("0x0BEc776870461D7BC4cB24e253baC71b0a6D6259")
    //       .then(console.log);
    //     this.setState({ nextPageNo: 0 });
    //     const accounts = await window.ethereum.enable();
    //     const account = accounts[0];

    //     //const gasAmount = await assetrentcontract.methods.GetAssetCount().estimateGas({ from: account });

    //     // const assetCount = await assetrentcontract.methods.GetAssetCount().call({
    //     //   from: account,
    //     //   gasAmount,
    //     // });
    //     //console.log('assetCount');
    //     //console.log(assetCount);
    //     var i;
    //     var result = [];
    //     var assetRes;
    //     for (i = 0; i < assetCount; i++) {
    //     //   var gasAmount1 = await assetrentcontract.methods.GetAsset(i).estimateGas({ from: account });
    //     //   assetRes = await assetrentcontract.methods.GetAsset(i).call({
    //     //     from: account,
    //     //     gasAmount1,
    //     //   });

    //       var resObj = assetRes;


    //       if (resObj.lender.toUpperCase() == account.toUpperCase()) {

    //         //if (assetRes[4] == 1) {
    //         // var gasAmount2 = await assetrentcontract.methods.GetBorrowedAsset(resObj.borrowedAssetId).estimateGas({ from: account });
    //         // var brrRes = await assetrentcontract.methods.GetBorrowedAsset(resObj.borrowedAssetId).call({
    //         //   from: account,
    //         //   gasAmount2,
    //         // });
    //         //console.log('brrRes');
    //         //console.log(brrRes);

    //         if (resObj.state > 0) {
    //           resObj.brrRes = brrRes;
    //           //console.log('resObj');
    //           //console.log(resObj);

    //           var date = new Date(assetRes[8] * 1000);
    //           // Hours part from the timestamp
    //           var year = date.getFullYear();
    //           var month = date.getMonth();
    //           var day = date.getDay();
    //           var hours = date.getHours();
    //           // Minutes part from the timestamp
    //           var minutes = "0" + date.getMinutes();
    //           // Seconds part from the timestamp
    //           var seconds = "0" + date.getSeconds();

    //           // Will display time in 10:30:23 format
    //           var formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


    //           resObj.brrRes.formattedTime = formattedTime;
    //           resObj.requested = true;
    //           assetRes[16] = i;

    //         }
    //         else {
    //           resObj.requested = false;
    //           assetRes[16] = i;
    //         }
    //         console.log('resObj');
    //         console.log(resObj);
    //         result.push(resObj);
    //         //}
    //       }
    //     }
    //     //console.log('result');
    //     //console.log(result);
    //     this.setState({ assets: result });
    //   };

    render() {

        let WeekNFTs = [];
        for (var i = 1; i < 13; i++) {
            WeekNFTs.push(<Card style={{ width: '5rem' }}>

                <Card.Body>
                    <Card.Text>Price: 10000</Card.Text>
                    <Card.Text>Status: state</Card.Text>
                    <Button variant="secondary" size="sm" onClick={() => this.CreateWeekNFT(i)}>{i}</Button>
                </Card.Body>
            </Card>);
            // WeekNFTs.push(<div><Button variant="secondary" onClick={() => this.CreateWeekNFT(i)}>{i}</Button>{' '}</div>);
        }
        for (var i = 14; i < 26; i++) {
            WeekNFTs.push(<Card style={{ width: '5rem' }}>

                <Card.Body>
                    <Card.Text>Price: 10000</Card.Text>
                    <Button variant="secondary" size="sm" onClick={() => this.CreateWeekNFT(i)}>{i}</Button>
                </Card.Body>
            </Card>);
        }
        for (var i = 27; i < 39; i++) {
            WeekNFTs.push(<Card style={{ width: '5rem' }}>

                <Card.Body>
                    <Card.Text>Price: 10000</Card.Text>
                    <Button variant="secondary" size="sm" onClick={() => this.CreateWeekNFT(i)}>{i}</Button>
                </Card.Body>
            </Card>);
        }
        for (var i = 40; i <= 52; i++) {
            WeekNFTs.push(<Card style={{ width: '5rem' }}>

                <Card.Body>
                    <Card.Text>Price: 10000</Card.Text>
                    <Button variant="secondary" size="sm" onClick={() => this.CreateWeekNFT(i)}>{i}</Button>
                </Card.Body>
            </Card>);
        }
        return (

            <div>

                <Jumbotron>
                    <br></br>
                    <br></br>
                    <h2 class="text-center"> Create TimeNFT for your Team  </h2>
                </Jumbotron>
                <div class="form-row">
                    <div class="col xs = {12}">
                        <h7>  MM Account: {this.state.selectedAccoutnt}  </h7>
                    </div>
                </div>
                <br></br>
                <Row>
                    <Col xs={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={'https://ipfs.io/ipfs/' + this.state.team.TeamUrl} alt="" />
                            <Card.Body>
                                <Card.Title>Team Name: {this.state.team.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8}>
                        <WeekPicker/>
                        {/* <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                            {WeekNFTs}
                        </ButtonToolbar> */}
                    </Col>

                </Row>

            </div>
        );
    }
}

export default TeamOwnerPage;