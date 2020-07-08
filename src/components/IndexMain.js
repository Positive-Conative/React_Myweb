import React from 'react';
import './IndexMain.css';
import IndexVideo from './videos/IndexVideo.mp4'
class IndexMain extends React.Component{
    render(){
        return(
            <MainVidio></MainVidio>
        );
    }
}

class MainVidio extends React.Component{
    render(){
        return(
            <div className="firstSession">
                <span className="mainTextbar">
                        hello world
                </span>

                <video className='indexVideo' autoPlay loop muted>
                    <source src={IndexVideo} type='video/mp4' />
                </video>
            </div>
        );
    }
}

export default IndexMain;