import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import history from '../utils/history';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bundlebond from '../bundlebond.png';
//import assetrentcontract from '../utils/assetrentcontract.js'
import web3 from '../utils/web3.js'

class MainPage extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            AdminUser: false,
            selectedAccoutnt: "0x0000000000000000000000000000000000000000"
        };}
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h2> Bundle Bond  </h2>
                </div>
                <h7>  MM Account: {this.state.selectedAccoutnt}  </h7>
                <div class="container">
                    <div class="row top-buffer">
                        <Col xs={6}>
                            <div class="row top-buffer">
                                <div class="col-xl-6">
                                    <Button variant="secondary btn-block" onClick={() => history.push('/LenderPage')} size={20}>Enter As a Lender</Button>
                                </div>
                            </div>
                            <div class="row top-buffer">
                                <div class="col-xl-6">
                                    <Button variant="secondary btn-block" onClick={() => history.push('/RequestPage')}>Request Asset</Button>
                                </div>
                            </div>

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
        )
    }
};

export default MainPage;