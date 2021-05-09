//import logo from '../logo.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import '../App.css';
import React, { Component, useState } from "react";
//import { AssetDonation } from "../abi/abi";
import ipfs from '../utils/ipfs';
import Form from 'react-bootstrap/Form';
import bundlebondcontract from '../utils/bundlebondcontract.js';

class CreateTeamPage extends Component {
    constructor(props) {
        super(props);
        this.assetDes = React.createRef();
        this.assetLocation = React.createRef();
        this.assetTitle = React.createRef();
        this.fileadress = React.createRef();
        this.state = {
            buttonDisabled: false,
            buffer: null,
            ipfsHash: '',
            selectedAccoutnt: "0x0000000000000000000000000000000000000000"
        };
    }
    componentDidMount() {
        setInterval(async() => {
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            this.setState({ selectedAccoutnt: account });
        }, 1000)
    }

    addAsset = async (t) => {
        t.preventDefault();
        this.setState({ buttonDisabled: true });
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        console.log("account");
        console.log(account);
        this.setState({ selectedAccoutnt: account });
        //const account = await web3.givenProvider.selectedAddress;//accounts[0];
        console.log('selectedAddress');
        console.log(account);
        const tit = this.assetTitle.current.value;
        const des = this.assetDes.current.value;
        const loc = this.assetLocation.current.value;
        const gasAmount = await bundlebondcontract.methods.addTeam(account,tit,des,loc,this.state.ipfsHash).estimateGas({ from: account });
        console.log('gasAmount');
        console.log(gasAmount);
        const result = await bundlebondcontract.methods.addTeam(account,tit,des,loc,this.state.ipfsHash).send({
            from: account,
            gasAmount,
        });
        this.setState({ buttonDisabled: false });
        console.log('result');
        console.log(result);
        this.setState({ buttonDisabled: false });
    };

    fileUploaded = async (t) => {
        t.preventDefault();
        const file = t.target.files[0];
        console.log('this.fileadress');
        console.log(file);
        let contentBuffer = await this.readFileAsync(file);
        //const reader = new window.FileReader();
        //const result = await reader.readAsArrayBuffer(file);
        var fileBuffer = new Uint8Array(contentBuffer);
        console.log("Buffer: ", fileBuffer);
        this.setState({ buffer: fileBuffer });


        const hash = await ipfs.files.add(Buffer.from(this.state.buffer));
        this.setState({ ipfsHash: hash });
        console.log('hash', hash[0].hash);
        this.setState({ ipfsHash: hash[0].hash });
        console.log('https://ipfs.io/ipfs/' + this.state.ipfsHash);



    }


    readFileAsync = async (file) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsArrayBuffer(file);
        })
    }
    render() {
        return (<div>
            <div class="jumbotron">
                <h2> Asset Donation  </h2>

            </div>
            <div class="form-row">
                <div class="col xs = {12}">
                    <h7> MM Account: {this.state.selectedAccoutnt}  </h7>
                </div>
            </div>
            <div class="container">
                <div class="form-row">
                    <div class="col-xl-5 col-lg-6">
                        <Card style={{ flex: 1 }} >
                            <div class="card-header py-3">
                            </div>
                            <div class="card-body">

                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <div>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="AssetTitle">Team Nmae</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl
                                                        ref={this.assetTitle}
                                                        placeholder="AssetTitle"
                                                        aria-label="AssetTitle"
                                                        aria-describedby="AssetTitle"
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="AssetDescription">Team Description</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl
                                                        ref={this.assetDes}
                                                        placeholder="AssetDescription"
                                                        aria-label="AssetDescription"
                                                        aria-describedby="AssetDescription"
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="AssetLocation">Team Location</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl
                                                        ref={this.assetLocation}
                                                        placeholder="AssetLocation"
                                                        aria-label="AssetLocation"
                                                        aria-describedby="AssetLocation"
                                                    />
                                                </InputGroup>
                                                <Card.Img variant="top" src={'https://ipfs.io/ipfs/' + this.state.ipfsHash} alt="" />
                                                <br></br>
                                                <Form>
                                                    <Form.File
                                                        id="custom-file-translate-html"
                                                        label="Add Asset Image"
                                                        data-browse="Choose File"
                                                        custom
                                                        onChange={this.fileUploaded}
                                                        ref={this.fileadress}
                                                    />
                                                </Form>
                                                <br></br>
                                                <div class=" form-group col-md-6">
                                                    <button type="button" class="btn btn-outline-secondary btn-block" onClick={this.addAsset} disabled={this.state.buttonDisabled}>Save</button>
                                                </div>
                                                {/* <InputGroup className="mb-3">
                                                    <FormControl
                                                        placeholder="Recipient's username"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>

                                                <label htmlFor="basic-url">Your vanity URL</label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="basic-addon3">
                                                            https://example.com/users/
      </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                                </InputGroup>

                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>$</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>

                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>With textarea</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl as="textarea" aria-label="With textarea" />
                                                </InputGroup> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default CreateTeamPage;