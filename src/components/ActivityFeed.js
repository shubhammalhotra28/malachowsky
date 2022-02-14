import React from 'react';
import './ActivityFeed.css';
import EventCard from './EventCard.js';
import {Table} from 'reactstrap';


class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);
        this.cards = [];
        this.name = props.name;
        this.maxElements = props.maxElements;

        this.addCard("Title", "Example Card 1", "examplelink")
        this.addCard("Title", "Example Card 2", "examplelink")
        this.addCard("Title", "Example Card 3", "examplelink")
        this.addCard("Title", "Example Card 4", "examplelink")
    }

    addCard = (title,text,link) => 
    { 
        this.cards.unshift([title,text,link]);
        if(this.cards.length > this.maxElements){
            this.cards.pop();
        }
    }


    render() {
			return (
            <div class="activityfeed">
            <h2>{this.name}</h2>
                <Table>
                {this.cards.map((card) => (
                        <EventCard title={card[0]} text={card[1]} link={card[2]}>Example Card</EventCard>
                    ))}
                </Table>
			</div>
			);
		}
}

export default ActivityFeed;
