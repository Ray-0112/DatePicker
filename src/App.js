import ToDoList from './ToDoList'
import loginUI from './loginUI'
import React from 'react';
import { SupervisorAccountTwoTone } from '@material-ui/icons';

function UserGreeting(props) { 
     return ToDoList();
} 
function GuestGreeting(props) { 
    return loginUI();
} 
function Greeting(props) { 
    
   return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />; 
} 
const AA = ()=>{
    return <Greeting isLoggedIn={false}/>;
}
   export default AA;
