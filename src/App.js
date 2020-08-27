import React from 'react';
import './App.css';
import Header from './components/include/Header';
import Footer from './components/include/Footer';
import store from './store';

class App extends React.Component {
  componentDidMount() {
    fetch('api/group')
    .then(res=>res.json())
    .then(data=>this.setState({username:data.username}));

    this.CallGuestbookData()
    // .then(res => console.log(res))
      .catch(err => console.log(err));

    // fetch('api')
    //     .then(res=>res.json())
    //     .then(data=>this.setState({username:data.username}));
  }
  CallGuestbookData = async() =>{
    const res = await fetch('/read');
    const body = await res.json();
    store.dispatch({type:'getGuestbookData', val:body})
    return body;
  }

  constructor(props) {
      super(props);
      this.state = {
          username:null
      };
  }
  
  render() {
    return (
        <div className="App">
          <Header/>
           {this.props.children}
            {/* <header className="App-header">
              {username ? `Hello ${username}` : 'Hello World'}
            </header> */}
            <Footer/>
        </div>
    );
    ;
  }
}

export default App;