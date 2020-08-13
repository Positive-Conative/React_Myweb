import React from 'react';
import './IntroductionMain.css';
import MyImage from '../Images/KYJ.jpg'

class IntroductionMain extends React.Component{
    render(){
        return(
            <div>
                <h1 className="Title">
                    컴퓨터공학과 김영재
                </h1>
                <div className="Content">
                    <div>
                        <img className="MyImage" src={MyImage} alt="Kim Young Jae"></img>
                    </div>                    
                    <div className="Text">
                        안녕하세요 컴퓨터공학과 김영재입니다. <br />
                        React와 Node.js, MongoDB를 이용하여 간단한 웹 사이트를 제작해 보았습니다. <br />
                        언제나 긍정적이게 생각합시다. <br />

                        TEST : {this.props.name}<br />
                        test<br />test<br />test<br />test<br />test<br />test<br />
                        test<br />test<br />test<br />test<br />test<br />test<br />
                        test<br />test<br />test<br />test<br />test<br />test<br />
                        test<br />test<br />test<br />test<br />test<br />test<br />
                    </div>
                </div>
            </div>
        );
    }
}


export default IntroductionMain;