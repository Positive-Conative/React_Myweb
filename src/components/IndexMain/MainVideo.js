import React from 'react';
import IndexVideo from '../videos/IndexVideo.mp4'

class MainVideo extends React.Component{
    render(){
        return(
            <div className="firstSession">
                <span className="mainTextbar">
                    안녕하세요. 컴퓨터공학과 김영재입니다.
                    <div className="mainTextbarSmall">
                        Made By Kim Young Jae
                    </div>
                </span>

                <video className='indexVideo' autoPlay loop muted>
                    <source src={IndexVideo} type='video/mp4' />
                </video>
            </div>
        );
    }
}

export default MainVideo;