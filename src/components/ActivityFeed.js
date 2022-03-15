import React from 'react';
import './ActivityFeed.css';
import EventCard from './EventCard.js';
import {Table} from 'reactstrap';
import { API } from 'aws-amplify';


class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update : false,
            cards : []
        };
        this.cards = [];
        this.name = props.name;
        this.maxElements = props.maxElements;

    //     API.get('chowlocation', '/chowlocation')
    //     .then(response => {
    //         response.forEach(element => {
    //             this.addCard("Chow Spotted", "View Map", "/chowlocation")
    //         });
    //     })
    //     .catch(error => {
    //       console.log(error.response);
    //    });

    //    API.get('chowclasses', '/chowclasses')
    //     .then(response => {
    //         response.forEach(element => {
    //             this.addCard("Class Rated", "View Rating", "/chowclasses")
    //         });
    //     })
    //     .catch(error => {
    //       console.log(error.response);
    //    });    
    
    }

    componentDidMount(){
        this.refresh();
    }


    refresh = async () => {
        await API.get('chowstatus', '/chowstatus')
        .then(response => {
            response['Items'].forEach(element => {
                console.log(element["mood"])
                this.addCard("Chow Status", "Mood: "+element["mood"]+" Danger: "+element["danger_level"], "/chowstatus")
            });
        })
        .catch(error => {
          console.log(error.response);
       });
       this.setState({cards: this.cards, update: 'true'});
    }

    addCard = async (title,text,link) => 
    {
        if(this.cards.unshift([title,text,link]) > this.maxElements){
            this.cards.pop();
        }
    }


    render() {
        if ( this.state.update == false ){
            return (
                <div>
                <h2>{this.name}</h2>
                </div>
                );
        }else{
			return (
            <div className="activityfeed">
            <h2>{this.name}</h2>
                <Table>
                {this.state.cards.map((card) => (
                        <EventCard title={card[0]} text={card[1]} link={card[2]}>Example Card</EventCard>
                    ))}
                </Table>
			</div>
			);
		}
    }
}

export default ActivityFeed;
