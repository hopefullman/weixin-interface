import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Router, Route, hashHistory,Switch ,Redirect} from 'react-router-dom';
import Dimensions from 'react-dimensions';
import axios from 'axios';
import { NavConfiger,Navigator } from "nav-react";
import './qrcode.css';
import {url} from '../config';
class qrcode extends Component {

    constructor(props){
    super(props)
    this.state = {
      delay: 1,
      result: 'No result',
       htitle: '请您对准二维码扫描',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    try{
    if(data){
      this.setState({
        result: data,
      })
      let datadata=encodeURIComponent(data)
      this.props.history.push(`/xinxi${datadata}`)
    }
  }catch(e){
    console.log(e)
  }
  }
  handleError(err){
    console.error(err)
  }
  navConfig = {
            left: "返回",
            center: "二维码追随详情",
            navClass: "navigator"
    };
  render(){
    let navAreaStyleObj={
      'backgroundColor':'#6890ef',
      'fontSize':'16px',
      'color': '#fff',
      'height':'44px'
    }
    let height1=document.documentElement.clientHeight;
    return(
      <NavConfiger >
      <div className="qrcode" style={{'height':height1}}>
      <Navigator className="navAreaClass" style={navAreaStyleObj} navConfig={this.navConfig}/>
      <div className='qrcode2'>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          >
          </QrReader>
      <p style={{textAlign:'center',color:'#eee',wordBreak:'breakAll'
,wordBreak:'breakword',width:'100%',display:'block'}}>{this.state.htitle}</p>
      </div>
       </div>
    </NavConfiger>
    )
  }
}

export default qrcode;