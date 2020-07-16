import React from 'react';
import './GuestBookWrite.css';
import {Modal, Button, Form} from 'react-bootstrap';

function WriteModal() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          작성
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>방명록 작성하기</Modal.Title>
          </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group>
                            <Form.Label>이름</Form.Label>
                            <Form.Control id="name" placeholder="ex) 홍길동" /> <br />

                            <Form.Label>내용 작성</Form.Label>
                            <Form.Control as="textarea" id="content" rows="3" Style="resize: none;" placeholder="100자 이내로 작성해주세요!" /> <br />
                            
                            <Form.Label>비밀번호 입력</Form.Label>
                            <Form.Control
                                type="password"
                                id="Password"
                                placeholder="4-15자 이내로 작성해 주세요."
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">작성 완료</Button>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default WriteModal;