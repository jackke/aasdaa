import React,{Component} from "react"
import "./top.css";
class Tophead extends Component{
    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }
    render(){
        let list = this.props.list;
        console.log(list);
        
        return(
             <div className="xioage" >
            <ul style={{display:"flex"}}>
                {
                     list.map((itme,i)=>{
                        return (<li className={this.state.index === i ? "action" : "" } key={i} onClick={this.Tab.bind(this,i)}>{itme.titles}</li>)                        
                    })
                }
            </ul>
                <div>
                    {
                        list[this.state.index].content
                    }
                </div>
            </div>
        )
    }
    Tab(i){
        this.setState({index:i})
    }
}

export default Tophead