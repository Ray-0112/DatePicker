import React from 'react';
import LoginUI from './LoginUI';
import ToDoList from './ToDoList';

export default class Website extends React.Component{

    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
 
    componentDidMount(){}

    componentWillUnmount(){}

    setRenderItem(){
        if(this.props.LoginStatus){
            return (<ToDoList/>);
        }else{
            return (<LoginUI onLogin={this.props.onLogin}/>);
        }
    }

    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}