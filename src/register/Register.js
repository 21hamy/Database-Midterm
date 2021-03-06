import React, {Component} from "react";
import axios from "axios";
import {ip,port} from "../setIP/setting";
import { useHistory } from 'react-router-dom';

export default function WithRouter(props) {
    const history = useHistory();
    return (<Register {...props} history={history}/>);
}

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            times:"",
            idkey:"",
            firstname:"",
            lastname:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClicked(){
        let url = `/data`;
        let data = {
            times:this.state.times,
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname
        }
        axios.post(url,data)
        this.setState({
            times:"",
            idkey:"",
            firstname:"",
            lastname:""
        });
        this.props.history.push('/Showdata');
    }

    render() {
        return(
            <div>
                <div className="App">
                <h2 className="my-4">Register<br/></h2>
                    <hr/>
                </div>
                <form className="container">
                    <div className="form-group">
                        <label className="text-white" >First Name</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  >Last Name</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  htmlFor="id">Id</label>
                        <input type="text" className="form-control" size="10" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  htmlFor="id">times</label>
                        <input type="text" className="form-control" id="times" onChange={this.handleChang} value=""/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                </form>
            </div>
        );
    }
}