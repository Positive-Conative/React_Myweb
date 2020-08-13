import IndexMain from '../components/IndexMain/IndexMain';
import {connect} from 'react-redux';

function mapReduxState_to_reactProps(state){
    //redux에서 store값이 변경될때마다 호출되도록 하는 함수(subscribe)
    //store의 state값이 인자로 전달됨
    return{
        name : state.name //react-store의 state
    }
}

export default connect(mapReduxState_to_reactProps)(IndexMain);

// import React from 'react';
// const Home = () => {
//     return (
//         <div>
//             <IndexMain></IndexMain>
//         </div>
//     );
// };

// export default Home;