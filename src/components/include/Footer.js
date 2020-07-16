import React from 'react';
import './Footer.css';
import Music from '../videos/Qaayel - Nether (Dub Mix).mp3'

class Footer extends React.Component{
    render(){
        return (
            <div className="footerSession">
                Copyright © Kim Young Jae. All rights reserved. <br />
                Music - Qaayel - Nether (Dub Mix).mp3 <br />
                {/* autoPlay  */}
                <audio autoplay loop controls> <source src={Music} type="audio/mp3"/> </audio>
            </div>
            
        );
    }
}
export default Footer;