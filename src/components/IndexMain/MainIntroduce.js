import React from 'react';
import './MainIntroduce.css';
import {Card} from 'react-bootstrap';
class MainIntroduce extends React.Component{
    render(){
        return(
            <div className="secondSession">
                <div className="secondSessionHeader">
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
        );
    }
}

export default MainIntroduce;