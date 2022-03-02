import React from 'react';
import { Button} from 'react-bootstrap';
import styled from 'styled-components';
import './ChowStatus.css'
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { API } from 'aws-amplify';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

class ChowStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {danger: '1', mood: '3'};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendLevel(danger, mood){
    alert("The Chow's danger level is: " + this.state.danger + "\r\nThe Chow's danger level is: " + this.state.mood);
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
    //this.sendLevel(this.state.danger, this.state.mood);
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
        <h1 class='status_header'>Chow Status</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <br /><br />Rate the Chow's current danger:
              <Rating value={this.state.danger} onChange={this.handleChangeDanger}
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
              />
            </label>
            <label>
              <br /><br />Rate the Chow's current mood:
              <Rating name="size-large" value={this.state.mood} onChange={this.handleChangeMood}
                name="highlight-selected-only"
                defaultValue={2}
                size="large"
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ChowStatus;
