import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import history from '../utils/history';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bundlebond from '../bundlebond.png';
//import bundlebondcontract from '../utils/bundlebondcontract.js'
import web3 from '../utils/web3.js'

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AdminUser: false,
            selectedAccoutnt: "0x0000000000000000000000000000000000000000"
        };
        this.setAdmin();
    }

    componentDidMount() {
        setInterval(async () => {
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            this.setState({ selectedAccoutnt: account });
        }, 1000)
    }
    setAdmin = async () => {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];

        this.setState({ selectedAccoutnt: account });
        // const gasAmount = await assetrentcontract.methods.isAdmin(account).estimateGas({ from: account });
        // const result = await assetrentcontract.methods.isAdmin(account).call({
        //     from: account,
        //     gasAmount,
        // });

        //this.setState({ AdminUser: result });
    }

    getState = async () => {
        return this.state.AdminUser;
    }

    render() {
        return (
            <div>
                <script src="js/bootstrap.min.js"></script>
                <link href="css/bootstrap.min.css" rel="stylesheet"></link>

                <Jumbotron>
                    <br></br>
                    <br></br>
                    <h2 class="text-center"> Bundle Bond  </h2>
                </Jumbotron>
                <div class="form-row">
                    <div class="col xs = {12}">
                        <h7>  MM Account: {this.state.selectedAccoutnt}  </h7>
                    </div>
                </div>
                <br></br>
                <div class="row top-buffer">

                    <div class="container">
                        <div class="row top-buffer">
                            <Col xs={6}>
                                <div class="row top-buffer">
                                    {' '} <Button variant="secondary btn-block" onClick={() => history.push('/CreateTeamPage')} size={20}>Create Team</Button>
                                </div>
                                <br></br>
                                <div class="row top-buffer">
                                    {' '} <Button variant="secondary btn-block" onClick={() => history.push('/TeamOwnerPage')} size={20}>Enter As a Team Owner</Button>
                                </div>
                                <br></br>
                                <div class="row top-buffer">
                                    {' '}    <Button variant="secondary btn-block" onClick={() => history.push('/RequestPage')}>Buy a Time NFT</Button>
                                </div>
                                <br></br>
                                <div class="row top-buffer">
                                    <div class="col-xl-6">
                                        {this.state.AdminUser && <Button variant="secondary btn-block" active={false} class="btn btn-outline-secondary btn-block" onClick={() => history.push('/AdminPage')}>Admin</Button>}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div class="card shadow mb-4">
                                    <div class="card-body">

                                        <div class="row">
                                            <div class="col-12">

                                                <Image src={bundlebond} thumbnail />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default MainPage;