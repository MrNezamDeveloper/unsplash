import React , { Component } from "react";
import './searchform.css'
export default class SearchForm extends Component{
    
  
  state = {
      history : ''
  }

    showToConsoleLog = (event) =>{
        this.setState({
            history : event.target.value
        })
    }


    sendValEnterKey = (value) =>{
        if (value.keyCode === 13) {
           this.props.sendFuncForBackEvent(this.state.history)
            
        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder='search'
                value={this.state.history}
                onChange={this.showToConsoleLog}
                onKeyUp={this.sendValEnterKey}
                />
            </div>
        )
    }
}