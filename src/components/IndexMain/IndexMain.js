import './IndexMain.css';
import {connect} from 'react-redux';
import MainIntroduce from './MainIntroduce'

function mapDispatch_to_Props(dispatch){
    return{
        saveRedux:function(name){
            dispatch({ type: 'NAME', val: name })
        }
    }
}
export default connect(null, mapDispatch_to_Props)(MainIntroduce);

// import React from 'react';
// import store from '../../store';
// import MainVideo from './MainVideo'

// class IndexMain extends React.Component{
//     render(){
//         return(
//             <div>
//                 {/* Redux wrapped */}
//                 <MainIntroduce saveRedux={function (name) {
//                     store.dispatch({ type: 'NAME', val: name })
//                 }.bind(this)}></MainIntroduce>
//             </div>
//         );
//     }
// }


// export default IndexMain;