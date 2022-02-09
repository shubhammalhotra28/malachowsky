import React from 'react';
import './ActivityFeed.css';
import EventCard from './EventCard.js';
import {Table} from 'reactstrap';


class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);
        this.cards = [];
        this.name = props.name;
    }

    render() {
			return (
            <div class="activityfeed">
            <h2>{this.name}</h2>
                <Table>
                    <EventCard title="Title" text="example card" link="/examplelink">Example Card</EventCard>
                </Table>
			</div>
			);
		}
}

export default ActivityFeed;
