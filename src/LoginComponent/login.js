import React from 'react';
import './login.css';

function Login(props){
    //console.log(props.history.location.state.user)
   // console.log(props.history.location.state.fname)
    const status = props.history.location.state.user;
    var name = props.history.location.state.fname;
    var lname = props.history.location.state.lname;
    var fullName = props.history.location.state.fullname;
    var we = props.history.location.state.we;
//console.log(we);
    return (
    <div>
<div>
{status == "fail" ? <h1 className = "input">YOU HAVE PROVIDED INVALID INPUT. 
<br></br>Kindly confirm given Data</h1> : status == "pass" ? <h1 className = "input">WELCOME {name} {lname}</h1>: ''}    
</div>
<div>
{fullName != undefined ? <h1 className = "input">WELCOME {fullName}</h1>: ''} 
</div>

</div>
)


}

export default Login;