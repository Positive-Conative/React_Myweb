import React from 'react';
import './GuestBookMain.css';
import WriteButton from './GuestBookWrite';
import {Table, ButtonGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router';

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
                <div className="Content">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>내용</th>
                                <th>이름</th>
                                <th>작성일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>2020.02.02 10:30</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>2020.02.02 10:30</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>2020.02.02 10:30</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <ButtonGroup className="ButtonToolbar">
                        <Link to="/GuestBook/1"><Button variant="secondary">1</Button></Link>&nbsp;
                        <Link to="/GuestBook/2"><Button variant="secondary">2</Button></Link>&nbsp;
                        <Link to="/GuestBook/3"><Button variant="secondary">3</Button></Link>&nbsp;
                        <Link to="/GuestBook/4"><Button variant="secondary">4</Button></Link>
                    </ButtonGroup>
                </div>
                <ButtonGroup className="WriteandDelete">
                    <Link to="/GuestBook/Write"> <WriteButton></WriteButton> </Link>&nbsp;
                    <Link to="/GuestBook/del"><Button variant="secondary">삭제</Button></Link>
                </ButtonGroup>
            </div>
        );
    }
}


export default GuestBookMain;