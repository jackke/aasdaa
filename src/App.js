import React, { Component } from 'react';
import Tophead from "./components/top";
import './App.css';
import { isObject } from 'util';
class App extends Component {
  constructor(props){
    super(props)
    this.text={
        title:"京东JD.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品",
        img:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg",
        toptitle:"京东 官网 多快好省 只为品质生活"
      }
      this.arrlist=[
        {
            titles:"家用电器",
            content:"家用电器家用电器家用电器家用电器家用电器家用电器家用电器家用电器家用电器家用电器家用电器家用电器家用电器"
            
        },
        {
            titles:"手机通讯",
            content:"手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯手机通讯"
        },
        {
            titles:"电脑数码",
            content:"电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码电脑数码"
        },
        {
            titles:"食品百货",
            content:"食品百货食品百货食品百货食品百货食品百货食品百货食品百货食品百货食品百货食品百货食品百货食品百货食品百货"
        },
        {
            titles:"生活服务",
            content:"生活服务生活服务生活服务生活服务生活服务生活服务生活服务生活服务生活服务生活服务生活服务生活服务生活服务"
        },
        {
            titles:"海囤全球",
            content:"海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球海囤全球"
        }
    ]
  }
  render() {
    return (
      <div>
         <header>
           <h2>{this.text.toptitle}</h2>
           <dl className="dls">
             <dt><img src={this.text.img}/></dt>
             <dd>{this.text.title}</dd>
           </dl>
         </header>
          <Tophead  list={this.arrlist}></Tophead>
      </div>
    )
  }
}

export default App;
