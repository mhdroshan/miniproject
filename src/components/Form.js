import React, { Component } from 'react';
import '../App.css'

class Form extends Component {
    render() {
        return (
            <div>
                <div className="createForm">
                    <form>
                        <h1>Create Profile</h1>
                        <input placeholder="Enter name" required name="Uname" type="text"/>
                        <textarea rows="3" placeholder= "Enter address" name="Uaddress" />
                        <input type="date" name="Udob" />
                        <input type="email" placeholder="Enter email"required name="Uemail" />
                        <input type="password" placeholder="pick a password" name="Upass"/>
                        <div className="subButt" type="submit" value="ADD" >Add</div>


                    </form>
                </div>
            </div>
        )
    }
}

export default Form
