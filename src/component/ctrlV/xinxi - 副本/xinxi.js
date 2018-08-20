import React, { Component } from 'react';
import { Router, Route, hashHistory,Switch ,Redirect} from 'react-router-dom';

import axios from 'axios';
import { NavConfiger,Navigator } from "nav-react";
import { FaBimobject ,FaGetPocket ,FaAddressCard,FaReceipt,FaShieldAlt,FaShippingFast,FaWarehouse} from 'react-icons/fa';
import './xinxi.css';
import {url} from '../config';

class xinxi extends Component {
		constructor(props){
		super(props)
		this.state={
			visible1:false,
			viaibal:false,
			visible2:false,
			baocunok:''
		}
	
	}
	componentDidMount(){
		// axios.post(`${url}/UserService/Login`,data1)
		// 		.then(res=>{
		// 			this.dataOk(res)

					
		// 		})
		// 		.catch(err=>console.log(err))


    // props 方法
    let asda=this.props.match.params.id;
    let asd=decodeURIComponent(asda)
    alert(asd)
	};
	navConfig = {
            left: "返回",
            center: "二维码追随详情",
            // right: <p onClick={this.rightClickHandle} >弹窗</p>,
            navClass: "navigator"
    };


  render() {
  	let {visibal1} =this.state
  	let navAreaStyleObj={
  		'backgroundColor':'#444',
  		'fontSize':'16px',
      'color': '#fff'
  	}
    return (
    <NavConfiger >
      <div className="xinxi" style={{'width':'100%'}}>
      <Navigator className="navAreaClass" style={navAreaStyleObj} navConfig={this.navConfig}/>
      {/*<div className="xinxititle" style={{'marginTop':'20px'}}><p style={{'fontSize':'18px','display':'inline','color':'#444'}}>二维码查询详情</p></div>
	  */}

        <div className="dingdanbianhao" style={{'width':'80%','margin':'10px 10%'}}><FaReceipt style={{'color':'blue','fontSize':'18px','verticalAlign':'text-bottom'}}/><p style={{'fontSize':'16px','display':'inline'}} >订单编号</p><p style={{'fontSize':'16px','display':'inline'}}>123</p></div>

        <div className="chandi" style={{'width':'80%','margin':'10px 10%'}}><FaAddressCard style={{'color':'blue','fontSize':'18px','verticalAlign':'text-bottom'}}/><p style={{'fontSize':'16px','display':'inline'}}>产品地</p><p style={{'fontSize':'16px','display':'inline'}}></p></div>

        <div className="chanpinming" style={{'width':'80%','margin':'10px 10%'}}><FaBimobject style={{'color':'blue','fontSize':'18px','verticalAlign':'text-bottom'}}/><p style={{'fontSize':'16px','display':'inline'}}>产品名</p><p style={{'fontSize':'16px','display':'inline'}}></p></div>

        <div className="chanpinzhiliang" style={{'width':'80%','margin':'10px 10%'}}><FaShieldAlt style={{'color':'blue','fontSize':'18px','verticalAlign':'text-bottom'}}/><p style={{'fontSize':'16px','display':'inline'}}>产品质量</p><p style={{'fontSize':'16px','display':'inline'}}></p></div>

        <div className="zhuangyunxiangmu" style={{'width':'80%','margin':'10px 10%'}}><FaShippingFast style={{'color':'blue','fontSize':'18px','verticalAlign':'text-bottom'}}/><p style={{'fontSize':'16px','display':'inline'}}>装运项目</p><p style={{'fontSize':'16px','display':'inline'}}></p></div>

        <div className="xuqiugongsi" style={{'width':'80%','margin':'10px 10%'}}><FaWarehouse style={{'color':'blue','fontSize':'18px','verticalAlign':'text-bottom'}}/><p style={{'fontSize':'16px','display':'inline'}}>需求公司</p><p style={{'fontSize':'16px','display':'inline'}}></p></div>
      </div>
    </NavConfiger>
    );
  }
}

export default xinxi;




