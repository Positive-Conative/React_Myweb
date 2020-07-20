import React from 'react';
import './MainIntroduce.css';
import {Card} from 'react-bootstrap';
import MainVideo from './MainVideo'

class MainIntroduce extends React.Component {
    state = { name: "a" };
    render() {
        return (
            <div>
                <MainVideo></MainVideo>
                <div className="secondSession">
                    <div className="secondSessionHeader">
                        
                        <input type="text" placeholder="who are you?" onChange={function (e) {
                            this.setState({ name: e.target.value })
                        }.bind(this)}></input>

                        <input type="button" value="input" onClick={function () {
                            this.props.saveRedux(this.state.name);
                        }.bind(this)}></input>

                --- Positive Conative ---
                </div>
                    <div className="cardBox">
                        <Card className="cards">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Dark Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="cards">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Dark Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="cards">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Dark Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="cards">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Dark Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainIntroduce;