import React from 'react';
import background from '../resources/tophat_chow.png';
import { Button} from 'react-bootstrap';
import styled from 'styled-components';
import './ChowStatus.css'
import { API } from 'aws-amplify';

class ChowStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {danger: '1', mood: '3'};

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  async postData() { 
    const apiName = 'chowstatus';
    const path = '/chowstatus';
    const myInit = {
      body: {},
      headers: {},
      queryStringParameters: {
        "danger": this.state.danger,
        "mood": this.state.mood
      }
    };

    try{
      return await API.post(apiName, path, myInit);
    }
    catch(error){
      console.log(error);
    }
}

callAPI = () => {
  this.postData();

}


  handleSubmit(event) {
    alert("The Chow's danger level is: " + this.state.danger + "\r\nThe Chow's mood level is: " + this.state.mood);

    event.preventDefault();
    // call the API here
    this.callAPI();
  }

  handleChangeDanger = (event) => {
    this.setState({ danger: event.target.value });
  }

  handleChangeMood = (event) => {
    this.setState({ mood: event.target.value });
  }

  render() {
    return (
      <div class='chowstatusmain'>
        <div class='status'>
        <h1 class='header'>Chow Status</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Rate the Chow's current danger level from 1-5:
              <select value={this.state.danger} onChange={this.handleChangeDanger}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <label>
              <br /><br />Rate the Chow's current mood from 1-5:
              <select value={this.state.mood} onChange={this.handleChangeMood}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ChowStatus;
