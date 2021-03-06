import React, { Component } from 'react';
import { Router, Route, hashHistory,Switch ,Redirect} from 'react-router-dom';
import axios from 'axios';
import { NavConfiger,Navigator } from "nav-react";
import { FaBimobject ,FaGetPocket ,FaAddressCard,FaReceipt,FaShieldAlt,FaShippingFast,FaWarehouse} from 'react-icons/fa';
import './change.css'
import {url} from '../config';

class change extends Component {
		constructor(props){
		super(props)
		this.state={
			oldadmin:'',
      oldpassword:'',
      newpassword:'',
      confirmpassword:'',
      alert:''

		}
	
	}
	componentDidMount(){

  }
  onsubmit=()=>{
     this.setState({alert:''})

    let oldadmin=this.state.oldadmin;
    let oldpassword=this.state.oldpassword;
      
    let oldadminexec=/^[0-9a-zA-Z]{6,20}$/;
    let oldpasswordexec=/^[0-9]{6,20}$/;
    let oldpasswordset=new Set(oldpassword);
    


    if (!oldadminexec.exec(oldadmin)) {
      this.setState({alert:'请你正确输入6-20位数字字母组合的用户名'})
      return false;
    };
    if (!oldpasswordexec.exec(oldpassword)) {
      this.setState({alert:'请你正确输入6-20位数字密码'})
      return false;
    };

    if (oldpasswordset.size==1) {
       this.setState({alert:'6-20位数字密码不能完全相同'})
       return false;
    };

    let data={
      name:oldadmin,
      password:oldpassword,
    }
    axios.post(`${url}/UserInfo/Login`,data)
         .then(res=>{this.changeok(res)})
         .catch(err=>{this.setState({alert:'您输入的用户名和密码存在错误，请您重新检查并输入'})}) 
    }

  changeok=(res)=>{
      console.log(res.data.data.id)
      if (res.data.code==1) {this.setState({alert:'用户名和密码不匹配'});return false;};
      if (res.data.code==0) {this.setState({alert:'用户名不存在'});return false;};
      if (res.data.code==2) {
        let newpassword=this.state.newpassword;
        let confirmpassword=this.state.confirmpassword;
        let newpasswordexec=/^[0-9]{6,20}$/;
        let newpasswordset=new Set(newpassword);
        if (!newpasswordexec.exec(newpassword)) {
        this.setState({alert:'请你正确输入6-20位数字密码'})
        return false;
        };

        if (newpasswordset.size==1) {
           this.setState({alert:'新密码6-20位数字密码不能完全相同'})
           return false;
        };
        if (newpasswordset.size==1) {
           this.setState({alert:'新密码6-20位数字密码不能完全相同'})
           return false;
        };
        if (confirmpassword.length!==0||newpassword.length!==0) {
            if (parseInt(newpassword)!==parseInt(confirmpassword)) {
            this.setState({alert:'两次密码输入不相同，请您检查后重新输入'})
           return false;
              };
        }else{
           this.setState({alert:'密码不能为空，请您检查后重新输入'})
           return false;
        }
         let data={
          id:res.data.data.id,
          password:newpassword,     
        }
        axios.post(`${url}/UserInfo/ChangePassword`,data)
             .then(res=>{this.changesecok(res)})
             .catch(err=>{console.log(err)}) 
        };


    // let newpassword=this.state.newpassword;
    // let confirmpassword=this.state.confirmpassword;
    // let newpasswordexec=/^[0-9]{6,20}$/;
    // let newpasswordset=new Set(newpassword);
    // if (!newpasswordexec.exec(newpassword)) {
    //   this.setState({alert:'请你正确输入6-20位数字密码'})
    //   return false;
    // };

    // if (newpasswordset.size==1) {
    //    this.setState({alert:'新密码6-20位数字密码不能完全相同'})
    //    return false;
    // };
    // if (confirmpassword.length!==0||newpassword.length!==0) {
    //     if (parseInt(newpassword)!==parseInt(confirmpassword)) {
    //     this.setState({alert:'两次密码输入不相同，请您检查后重新输入'})
    //    return false;
    // };
    // }else{
    //    this.setState({alert:'密码不能为空，请您检查后重新输入'})
    //    return false;
    // }
    //  let data={
    //   id:,
    //   password:newpassword,     
    // }
    // axios.post(`${url}/UserService/Login`,data)
    //      .then(res=>{this.changesecok(res)})
    //      .catch(err=>{console.log(err)}) 
  }


  changesecok(res){
    if (res.data==false) {this.setState({alert:'修改失败请重新检查用户名和密码'}); return false;};

     if (res.data==true) {this.setState({alert:'修改成功请！返回登录页面进行登录'})};
  }
     
   

 
  

    
  
	navConfig = {
            left: "返回",
            center: "修改密码",
            navClass: "navigator"
    };


  render() {
  	let {visibal1} =this.state
  	let navAreaStyleObj={
  		'fontSize':'16px',
      'color': '#fff'
  	}
    let height=document.documentElement.clientHeight-44;
    return (
   <NavConfiger >
      <Navigator className="navAreaClass" style={navAreaStyleObj} navConfig={this.navConfig}/>
      <div className='change' style={{'height':height,width:'100%'}}>
          <div className='chengee' style={{top:0.32*height,width:'100%',position:'relative',height:0.6*height}}>

              <input className='oldadmin' style={{width:'90%',height:0.06*height,outline:'0px',border:'0px',borderBottom:'1px solid #666',marginLeft:'5%',fontSize:'20px'}} placeholder='admin' onChange={(e)=>{this.setState({oldadmin:e.target.value})}} />

              <input className='oldpassword' type="dpassword" style={{width:'90%',height:0.06*height,outline:'0px',border:'0px',borderBottom:'1px solid #aaa',marginLeft:'5%',fontSize:'20px'}} placeholder='password' onChange={(e)=>{this.setState({oldpassword:e.target.value})}} />

              <input className='newpassword' type="password" style={{width:'90%',height:0.06*height,outline:'0px',border:'0px',borderBottom:'1px solid #aaa',marginLeft:'5%',fontSize:'20px'}} placeholder='newpassword' onChange={(e)=>{this.setState({newpassword:e.target.value})}} />

              <input className='confirmpassword' type="password" style={{width:'90%',height:0.06*height,outline:'0px',border:'0px',borderBottom:'1px solid #aaa',marginLeft:'5%',fontSize:'20px'}} placeholder='confirmpassword' onChange={(e)=>{this.setState({confirmpassword:e.target.value})}} />


               <p style={{display:'inlineBlock',width:'90%',marginLeft:'5%',fontSize:'12px',color:'#f00',textAlign:'center'}}>{this.state.alert}</p>

              <button className='oldbutton' style={{width:'90%',height:0.08*height,outline:'0px',border:'0px',borderRadius:'10px',marginLeft:'5%',fontSize:'20px',marginTop:0.05*height,color:'white',backgroundColor:'#5f8af0'}} onClick={this.onsubmit.bind(this)}>确认</button>

          
          </div>
      </div>
      </NavConfiger>
    );
  }
}

export default change;




