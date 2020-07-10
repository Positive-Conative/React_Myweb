import React from 'react';
import './IndexMain.css';
import MainVideo from './MainVideo'
import MainIntroduce from './MainIntroduce'

class IndexMain extends React.Component{
    render(){
        return(
            <div>
                <MainVideo></MainVideo>
                <MainIntroduce></MainIntroduce>
            </div>
        );
    }
}


export default IndexMain;