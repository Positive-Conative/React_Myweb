import React from 'react';
import './GuestBookMain.css';
import WriteButton from './GuestBookWrite';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import GuestBookTable from './GuestBookTable';

class GuestBookMain extends React.Component{
    render(){
        return(
            <div className="BODY">
                <h1 className="Title">
                    방명록
                </h1>
                <h4 className="SubTitle">
                    자유롭게 글을 써 보세요!
                </h4>
                <GuestBookTable></GuestBookTable>
                <ButtonGroup className="WriteandDelete">
                    <Link to="/GuestBook/Write"><WriteButton></WriteButton> </Link>&nbsp;
                    <Link to="/GuestBook/del"><Button variant="secondary">삭제</Button></Link>
                </ButtonGroup>
            </div>
        );
    }
}

export default GuestBookMain;