import React from 'react';
import './EventCard.css';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';


class EventCard extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.text = props.text;
        this.link = props.link;
    }

    render() {
			return (
			<div className="activitycard">
            <Card className="card" onClick={event =>  window.location.href=this.link}>
                <CardTitle className="title">{this.title}</CardTitle>
                <CardBody>
                    <CardText className="text">
                    {this.text}
                    </CardText>
                </CardBody>
            </Card>
			</div>
			);
		}
}

export default EventCard;