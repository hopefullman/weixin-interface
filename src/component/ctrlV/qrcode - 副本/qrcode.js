import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Router, Route, hashHistory,Switch ,Redirect} from 'react-router-dom';
import Dimensions from 'react-dimensions';
import windowDimensions from 'react-window-dimensions';
import './qrcode.css';
import {url} from '../config';
class qrcode extends Component {

  constructor(props){
    super(props)
    this.state = {
      delay: 1,
      result: '未扫描到二维码',
      htitle: '二维码扫描',
      // redirect: false,
    }

    // this.handleScan = this.handleScan.bind(this)
  }
  componentDidMount(){

  }

  handleScan(data){
    let datadata=encodeURIComponent(data);
    if(data){
      // let data1=encodeURI(data)

      // let data1=ReplaceAll(data,'/',"0")
      // let data1='123//456//'
      // let data=data.ReplaceAll('/','&');


      // let reg = /\//g;
      //   data=data.replace(reg,"&");
      
      this.setState({
        result: data,
        // redirect: true,
      })
      

      // props方法
      this.props.history.push(`/xinxi/${datadata}`);


      // query 方法
       // hashHistory.push({
       //      pathname: 'xinxi',
       //      query: {
       //          data:data
       //      },
       //  }) 
    }
  }

  handleError(err){
    // console.error(err)
    alert('请对准您要扫描的二维码')
  }

  render(){
   // redirect 方法
       // if (this.state.redirect) {
       //    return <Redirect push to={{pathname:'/xinxi',search:'?urll= `${datadata}`'}} />;
       //    }

    return(
      <div className='qrcode' >
        
        <QrReader
          delay={this.state.delay}
          onError={this.handleError.bind(this)}
          onScan={this.handleScan.bind(this)}
          
          >
          </QrReader>
      {/* <p style={{textAlign:'center',color:'#561f1f',wordBreak:'breakAll'
,wordBreak:'breakword',width:'100%',display:'block'}}>{this.state.result}</p>*/}
      </div>
    )
  }
}


export default qrcode;