//Create Redux
import {createStore} from 'redux';

//reducer
export default createStore(function(state, action){
    if(state === undefined){
        //최초 실행
        var name_in_localStorage = window.localStorage.getItem('name');
        if(name_in_localStorage){
            return {name:name_in_localStorage}
        }else{
            return {name:undefined}
        }
    }
    if(action.type === 'NAME'){
        return {...state, name:action.val}
    }
    if(action.type === 'getGuestbookData'){
        return {...state, guestBookData:action.val}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//redux dev tools에 필요한 코드