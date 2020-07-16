import IntroductionMain from '../components/Introduction/IntroductionMain';
import {connect} from 'react-redux';

function mapReduxState_to_reactProps(state){
    //redux에서 store값이 변경될때마다 호출되도록 하는 함수(subscribe)
    //store의 state값이 인자로 전달됨
    return{
        name : state.name //react-store의 state
    }
}

// 인자가 없을 수 있고, 인자가 하나라면 mapStateToProps 다.
// 첫 번재 인자 : redux - store의 state를 react의 props로 전달하는 래핑시켜주는 정보를 담아주는 함수
// 두 번째 인자 : redux의 dispatch를 react의 컴포넌트 props로 연결시켜주는 정보를 담고 있는 함수를 만들어서 공급

export default connect(mapReduxState_to_reactProps)(IntroductionMain);

// import React from 'react';
// import store from "../store" //test
// class About extends React.Component{
//     //test - subscribe
//     state = {name : store.getState().name}
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({name:store.getState().name});
//         }.bind(this));
//     }
//     render(){
//         return(
//             <IntroductionMain name = {this.state.name}/>
//         );
//     }
// }
// export default About;