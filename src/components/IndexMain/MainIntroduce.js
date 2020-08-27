import React from 'react';
import './MainIntroduce.css';
import {Card, Modal, Button, Form} from 'react-bootstrap';
import MainVideo from './MainVideo'
class MainIntroduce extends React.Component {
    render() {
        let WriteModalTag;
        //저장된 값이 있는지 확인, 없다면 Modal 출력
        if(!this.props.name){
            WriteModalTag = <WriteModal username={this.state} save_redux={this.props.saveRedux}></WriteModal>;
        }

        return (
            <div>
                {WriteModalTag}
                <MainVideo></MainVideo>

                <div className="secondSession">
                    <div className="secondSessionHeader">
                    --- Positive Conative ---
                    </div>
                    <Button variant="secondary" onClick={function(){
                        window.localStorage.removeItem('name');
                        window.location.reload(true);
                    }} >
                        이름 값 초기화하기!
                    </Button>
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
        function WriteModal(props, save_redux) { //props가 파라미터로 들어온다
            //Hook을 사용함 - usesState는 배열 형식으로 2개의 값을 가진다.
            var user_nameState = React.useState(props.username); //useState 의 인자는 State의 초깃값이 된다.
            var user_name = user_nameState[0]; //State 상탯값
            var setName = user_nameState[1]; //State 상태를 바꿀 수 있는 함수
            const [show, setShow] = React.useState(true);
            const handleClose = () => setShow(false);
            return (
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>사용할 닉네임을 입력하세요</Modal.Title>
                  </Modal.Header>
                        <Modal.Body>
                            <Form >
                                <Form.Group>
                                    <Form.Label>닉네임</Form.Label>
                                    {/* 함수이기때문에 Bind할필요가 없음 */}
                                    <Form.Control id="name" placeholder="ex) Conative" onKeyPress={e => { if(e.charCode===13){ e.preventDefault() }}}onChange={
                                        function (e) {
                                        setName(e.target.value);
                                    }}/> <br />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={function () {
                            if(typeof user_name === 'object'){
                                alert("값을 입력하지 않았습니다.")
                            }else if(typeof user_name === 'string'){
                                if(window.confirm(user_name + "이(가) 확실합니까?")){
                                    props.save_redux(user_name);
                                    window.localStorage.setItem('name', user_name);
                                    handleClose();
                                }
                            }else{
                                alert("무언가 문제가 발생한 듯 하다.")
                            }
                        }.bind(this)}>작성 완료
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                  </Modal.Footer>
                </Modal>
            );
        }
    }   
}

export default MainIntroduce;