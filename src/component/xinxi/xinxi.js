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
		
		}
	
	}
	componentDidMount(){
	 // QRCode/GetContent?content=""
	};


	navConfig = {
            left: "返回",
            center: "二维码追随详情",
            right: <p>退出</p>,
            navClass: "navigator"
    };


  render() {
  	
  	let navAreaStyleObj={
  		'backgroundColor':'#6890ef',
  		'fontSize':'16px',
      'color': '#fff',
      'height':'44px'
  	}
    let height2=document.documentElement.clientHeight;
    return (
    <NavConfiger >
      <div className="xinxi" style={{'width':'100%','backgroundColor':'#fff','height':height2}}>
      <Navigator className="navAreaClass" style={navAreaStyleObj} navConfig={this.navConfig}/>
      
        <div className="dingdanbianhao" style={{'width':'80%','margin':'10px 10%'}}><FaReceipt style={{'color':'white','fontSize':'18px','verticalAlign':'text-bottom','marginRight':'5px'}}/><p style={{'color':'white','fontSize':'16px','display':'inline'}} >订单编号:</p><p style={{'color':'white','fontSize':'16px','display':'inline','marginLeft':'15px'}}>123</p></div>

        <div className="chandi" style={{'width':'80%','margin':'10px 10%'}}><FaAddressCard style={{'color':'white','fontSize':'18px','verticalAlign':'text-bottom','marginRight':'5px'}}/><p style={{'color':'white','fontSize':'16px','display':'inline'}}>产品地:</p><p style={{'color':'white','fontSize':'16px','display':'inline','marginLeft':'15px'}}>123</p></div>

        <div className="chanpinming" style={{'width':'80%','margin':'10px 10%'}}><FaBimobject style={{'color':'white','fontSize':'18px','verticalAlign':'text-bottom','marginRight':'5px'}}/><p style={{'color':'white','fontSize':'16px','display':'inline'}}>产品名:</p><p style={{'color':'white','fontSize':'16px','display':'inline','marginLeft':'15px'}}></p></div>

        <div className="chanpinzhiliang" style={{'width':'80%','margin':'10px 10%'}}><FaShieldAlt style={{'color':'white','fontSize':'18px','verticalAlign':'text-bottom','marginRight':'5px'}}/><p style={{'color':'white','fontSize':'16px','display':'inline'}}>产品质量:</p><p style={{'color':'white','fontSize':'16px','display':'inline','marginLeft':'15px'}}></p></div>

        <div className="zhuangyunxiangmu" style={{'width':'80%','margin':'10px 10%'}}><FaShippingFast style={{'color':'white','fontSize':'18px','verticalAlign':'text-bottom','marginRight':'5px'}}/><p style={{'color':'white','fontSize':'16px','display':'inline'}}>装运项目:</p><p style={{'color':'white','fontSize':'16px','display':'inline','marginLeft':'15px'}}></p></div>

        <div className="xuqiugongsi" style={{'width':'80%','margin':'10px 10%'}}><FaWarehouse style={{'color':'white','fontSize':'18px','verticalAlign':'text-bottom','marginRight':'5px'}}/><p style={{'color':'white','fontSize':'16px','display':'inline'}}>需求公司:</p><p style={{'color':'white','fontSize':'16px','display':'inline','marginLeft':'15px'}}>123</p></div>
      </div>
    </NavConfiger>
    );
  }
}

export default xinxi;




