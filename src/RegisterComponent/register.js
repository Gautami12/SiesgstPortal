import React, {Component} from 'react';
import './register.css';
import {withRouter} from 'react-router-dom';
const email = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const phoneno = RegExp(/^\d{10}$/);
const formValid = formErrors =>{
    let valid = true;
    Object.values(formErrors).forEach((val) =>{
        val.length > 0 && (valid = false);
    });
    return valid;
}
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
firstName: null,
lastName: null,
email: null,
password: null,
contactno: null,
formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactno:""
}
        }
    }
    handleChange = e => {

        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
       // console.log("Name", name);
       // console.log("Value", value);

        switch(name)
{
    case 'firstName':
        formErrors.firstName = value.length <3 ? 'Minimum 3 characters required': "";
        break;
    case 'lastName':
                formErrors.lastName = value.length <3 ? 'Minimum 3 characters required': "";
                break;
    case 'email':
    formErrors.email = email.test(value) ? '': 'Invalid Email Address';
    break;

    case 'password':
        formErrors.password = value.length <6 ? 'Minimum 6 characters required': "";
        break;
    case 'contactno':
        formErrors.contactno = phoneno.test(value)? '': 'Contact Number should be valid';
break;
        default:
    break;
}    
this.setState({
    formErrors, [name]: value}, () =>{ 
    //    console.log(this.state)
    })
      }
      handleSubmit = e => {
          e.preventDefault();
          if(formValid(this.state.formErrors) && this.state.firstName != null && this.state.lastName !=null && this.state.email != null && this.state.password != null && this.state.contactno != null){
             /* console.log(`Submitting 
              firstname: ${this.state.firstName}
              lastname: ${this.state.lastName}
              email: ${this.state.email}
              `)
*/
           this.props.history.push('/login', {user: 'pass', fname: this.state.firstName, lname: this.state.lastName });
          }
          else{
        //      console.error('FORM INVALID');
              this.props.history.push('/login', {user: 'fail', failtext: 'Please provide proper Data' });
          }

      }
    
      handleCheckChange = e =>{
      e.preventDefault();
     const {name, value} = e.target;
     //console.log(name.length);
      }


    render(){
        const formErrors = this.state.formErrors;
return (
 
    <div className = "square1">
       <div >
    <h1 className={"headregister"}>Register with SIESGST Portal</h1>
    <p className = {"pararegister"}> Register to SIES GST Portal with your GST Gmail Account to get college updates, railway concession, halltickets, results and other features.</p>

</div>
        
    <form>
        <ul className = "flex-outer">
            <li>
            <label for="first-name" className = "inputlabel">First Name:-</label>
            <input className = "inputtext" type="text" id="first-name" name="firstName" placeholder="Enter your first name here" onChange = {this.handleChange}></input>
            </li>
            {formErrors.firstName.length > 0 ? (<span className = {"errors"}>{formErrors.firstName}</span>): ""}
            <li>
            <label for="last-name" className = "inputlabel">Last Name:-</label>
            <input className = "inputtext" type="text" id="last-name" name="lastName"placeholder="Enter your last name here" onChange = {this.handleChange}></input>
            </li>
            {formErrors.lastName.length > 0 ? (<span className = {"errors"}>{formErrors.lastName}</span>): ""}

            <li> 
            <label for="email" className = "inputlabel">Email:-</label>
            <input className = "inputtext" type="email" id="email" name="email" placeholder="Enter your GST email account here"  onChange = {this.handleChange}></input>
                
            </li>
            {formErrors.email.length > 0 ? (<span className = {"errors"}>{formErrors.email}</span>): ""}

            <li>
            <label  for="password" className = "inputlabel">Password:-</label>
            <input  className = "inputtext" type="password" id="password" name="password" placeholder="Enter your password here" onChange = {this.handleChange}></input>
                
            </li>
            {formErrors.password.length > 0 ? (<span className = {"errors"}>{formErrors.password}</span>): ""}
            <li>
            <label for="contactno" className = "inputlabel">Contact NO:-</label>
            <input className = "inputtext" type="number" id="contactno" name="contactno" placeholder="Enter your Contact Number" onChange = {this.handleChange}></input>
            </li>
            {formErrors.contactno.length > 0 ? (<span className = {"errors"}>{formErrors.contactno}</span>): ""}
            <br></br>
            <li >
            <button className = "btn1" onClick={this.handleSubmit} type="submit">Submt</button>
            </li>

        </ul>
    </form>
    </div>
)

}
}
export default withRouter(Register);