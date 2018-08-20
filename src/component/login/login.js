import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Router, Route, hashHistory,Switch ,Redirect} from 'react-router-dom';
import Dimensions from 'react-dimensions';
import { NavConfiger,Navigator } from "nav-react";
import {url} from '../config';
import axios from 'axios';
import './login.css';
class login extends Component {

  constructor(props){
    super(props)
    this.state = {
      admin:'',
      password:'',
      end:''
    }  
  }

  componentDidMount(){

  }
  
  submit=()=>{
    this.setState({end:''})
    let admin=this.state.admin;
    let password=this.state.password;
    let adminexec=/^[0-9a-zA-Z]{6,20}$/;
    let passwordexec=/^[0-9]{6,20}$/;
    let passwordset=new Set(password)
    if (!adminexec.exec(admin)) {
      this.setState({end:'请你正确输入6-20位数字字母组合的用户名'})
      return false;
    };
    if (!passwordexec.exec(password)) {
      this.setState({end:'请你正确输入6-20位数字密码'})
      return false;
    };
    if (passwordset.size==1) {
       this.setState({end:'6-20位数字密码不能完全相同'})
       return false;
    };
    let data={
      name:admin,
      password:password,
    }
    
    axios.post(`${url}/UserInfo/Login`,data)
         .then(res=>{this.loginok(res)})
         .catch(err=>{console.log(err)})
  }

  loginok(res){
    this.setState({end:''})
      console.log(res)
      if (res.data.code==0) {this.setState({end:'用户名不存在'}); return false;}
      if (res.data.code==1) {this.setState({end:'用户名密码不匹配'});return false;}
      if (res.data.code==2) {this.setState({end:'登录中，请稍等'}) 
                        this.props.history.push('/qrcode')
                        }
  }

  change=()=>{
    this.props.history.push('/change')
  }
  navConfig = {
            left: "返回",
            center: "登录",
            navClass: "navigator"
    };
  render(){
    let navAreaStyleObj={
      'fontSize':'16px',
      'color': '#fff',
      'top':'0px',
      'zIndex':'9'
    }
    let height=document.documentElement.clientHeight-44;
    return(
      <NavConfiger >
      <Navigator className="navAreaClass" style={navAreaStyleObj} navConfig={this.navConfig}/>
      <div className='login' style={{'height':height,width:'100%'}}>
          <div className='loginn' style={{top:0.32*height,width:'100%',position:'relative',height:0.6*height}}>

              <input className='admin' style={{width:'90%',height:0.06*height,outline:'0px',border:'0px',borderBottom:'1px solid #666',marginLeft:'5%',fontSize:'20px'}} placeholder='admin' onChange={(e)=>{this.setState({admin:e.target.value})}} />

              <input className='password' type="password" style={{width:'90%',height:0.06*height,outline:'0px',border:'0px',borderBottom:'1px solid #aaa',marginLeft:'5%',fontSize:'20px'}} placeholder='password' onChange={(e)=>{this.setState({password:e.target.value})}} />

              <p style={{display:'inlineBlock',width:'90%',marginLeft:'5%',fontSize:'12px',color:'#f00',textAlign:'center'}}>{this.state.end}</p>

              <button className='button' style={{width:'90%',height:0.08*height,outline:'0px',border:'0px',borderRadius:'10px',marginLeft:'5%',fontSize:'20px',marginTop:0.02*height,color:'white',backgroundColor:'#5f8af0'}} onClick={this.submit.bind(this)}>登录</button>

              <p style={{display:'inlineBlock',width:'90%',marginLeft:'5%',fontSize:'15px',marginTop:0.04*height,color:'#5f8af0',textAlign:'right'}} onClick={this.change.bind(this)}>修改密码</p>
          </div>
      </div>
      </NavConfiger>
    )
  }
}


export default login;