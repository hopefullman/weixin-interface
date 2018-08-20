import React, { Component } from 'react';
import { BrowserRouter,HashRouter,Link} from 'react-router-dom';
import { Router, Route, hashHistory,Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import xinxi from './component/xinxi/xinxi';
import qrcode from './component/qrcode/qrcode';
import login from './component/login/login';
import change from './component/change/change';
class App extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route exact path="/"  component={login}/>
        <Route path="/change"  component={change}/>
       	<Route path="/qrcode"  component={qrcode}/>
        <Route path="/xinxi:id" component={xinxi}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
