import React, { Component } from 'react';
import '../App.css'


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: null,
          email: null,
          password: null,
          errors: {
            fullName: '',
            email: '',
            password: '',
          }
        };
      }

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'fullName': 
            errors.fullName = 
              value.length < 5
                ? 'Full Name must be at least 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }

      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }
    


    render() {
        const {errors} = this.state;
        return (
            <div>
                {/* <div className="createForm">
                    <form>
                        <h1>Create Profile</h1>
                        <input placeholder="Enter name" required name="Uname" type="text"/>
                        <input type="number" placeholder="Enter phone number" name="Uphone" />
                        <textarea rows="3" placeholder= "Enter address" name="Uaddress" />
                        <input type="date" name="Udob" />
                        <input type="email" placeholder="Enter email"required name="Uemail" />
                        <input type="password" placeholder="pick a password" name="Upass"/>
                        <div className="subButt" type="submit" value="ADD" >Add</div>


                    </form> */}
                    <div className="createForm">
                    <h1>Create Profile</h1>
                    <form onSubmit={this.handleSubmit} noValidate>

                   
            <div className='formField'>
              
              <input placeholder="Enter name" type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='formField'>
             
              <input type='email' placeholder="Enter email"required name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <textarea rows="3" placeholder= "Enter address" name="Uaddress" />
            <input type="date" name="Udob" />
            <input type="number" placeholder="Enter phone number" name="Uphone" />
            <div className='formField'>
             
              <input type='password' placeholder="pick a password" name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            
              <button  className='subButt' type="submit">Create</button>
            
            
          </form>
          </div>
          

               
            </div>
        )
    }
}

export default Form
