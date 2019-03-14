import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      value:"",
      list:[]
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <input type="text" value={this.state.value} onChange={this.input_change.bind(this)}/>
        <button onClick={this.buclick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((itme,i)=>{
              return (
                <li key={i}>{itme} <button onClick={this.deleteli.bind(this,i)}>删除</button></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  input_change(e){
    this.setState({
      value:e.target.value,
    })
  }
  buclick(){
    let user = this.state.value;
    let list = this.state.list;
    if(this.state.value != ""){
      list.push(user)
      this.setState({
        list,
        value:""
      })
    }else{
      alert("内容不能为空")
    }
      
      
      
  }
}

export default App;
