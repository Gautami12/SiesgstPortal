import React,  {Component} from 'react';
import './profileplate.css';
import LandingPage from '../LandingComponent/landing';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import {withRouter} from "react-router-dom";


class Profile extends Component{

    constructor(props){
        super(props);
        //this.state= {username: '', password: '',flag: ''}
    }
 
     responseGoogle = (response) => {
        //console.log(response);
        //console.log('SUCC');
        var token = response.accessToken;
        var fullname = `${response.profileObj.givenName} ${response.profileObj.familyName}`;
        //console.log(token);
        if(token){
            this.props.history.push('/login', {fullname: fullname, we: response.profileObj} );
                }
      }
      
      
     responseGoogleFail = (response) => {
         //console.log('FAILLLL');
        //console.log(response);
        

        

      }

     responseFacebook = (response) =>{
          //console.log('BYEEEEE');
          //console.log(response);
          var token = response.accessToken;
          var fullname =response.name;
          if(token){
      this.props.history.push('/login', {fullname: fullname} );
          }
      }

     handleSubmit = (e) =>{
         e.preventDefault();
//console.log('BUIYIO');
this.props.history.push('/register');
    }
   

      render(){

        
return(
    <div className = "square">
<div >
    <h1 className={"head1"}>Welcome to SIESGST Portal</h1>
    <p className = {"par1"}>Sign Up to SIES GST Portal with your GST Gmail Account to get college updates, railway concession, halltickets, results and other features.</p>

</div>
<div className = 'landing'>
<LandingPage />
</div>
<div className = {"buttons"}>
<GoogleLogin
   className = "googlebutton"
    clientId="551062278187-ovu05jsm7iaps3b4ae1qkefaq6moeati.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogleFail}
    cookiePolicy={'single_host_origin'}
  />
 <FacebookLogin
    appId="453804385209643"
    fields="name,email,picture"
//onClick={componentClicked}
    callback={this.responseFacebook} />
<button className = "registerbutton" type="submit" onClick={this.handleSubmit} >REGISTER NOW</button>
</div>
</div>

);


      }
}
export default withRouter(Profile);
