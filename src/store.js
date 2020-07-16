//Create Redux
import {createStore} from 'redux';

//reducer
export default createStore(function(state, action){
    if(state === undefined){
        //최초 실행
        return {name:"이름을 입력하지 않았습니다."}
    }
    if(action.type === 'NAME'){
        return {...state, name:action.val}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//redux dev tools에 필요한 코드