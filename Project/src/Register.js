

import React, { Component } from 'react';



export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { regs: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                lastname: event.target.lastname.value,
                birthday: event.target.birthday.value,
                // phone: event.target.phone.value,
                email: event.target.email.value,
                password: event.target.password.value,
                logkey: event.target.logkey.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                });

    }




    render() {
        return (
            <section id="contact" className="py-5 h-100">
                <div className="container text-center">
                    <h1 className="display-4 pb-1 border-bottom w-25 mx-auto pt-5 text-dark">Register</h1>
                    <div className="row mx-auto">
                        <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                                <div className="form-group text-left" controlid='name'>
                                    <input type="text" name="name" className="form-control" required defaultValue={this.props.name} placeholder="Name..."></input>
                                </div>
                                <div className="form-group text-left" controlid='lastname'>
                                    <input type="text" name="lastname" className="form-control" required defaultValue={this.props.lastname} placeholder="Lastname..."></input>
                                </div>
                                <div className="form-group text-left" controlid='birthday'>
                                    <input type="date" name="birthday" className="form-control" required defaultValue={this.props.birthday} placeholder="Birthday..."></input>
                                </div>
                                {/* <div className="form-group text-left" controlid='phone'>
                                    <input type="text" name="phone" className="form-control" required defaultValue={this.props.phone} placeholder="Phone..."></input>
                                </div> */}
                                <div className="form-group text-left" controlid='email'>
                                    <input type="email" name="email" className="form-control" required defaultValue={this.props.email} placeholder="Email..."></input>
                                </div>
                                <div className="form-group text-left" controlid='password'>
                                    <input type="password" name="password" className="form-control" required defaultValue={this.props.password} placeholder="Password..."></input>
                                </div>
                                <div className="form-group text-left" controlid='logkey'>
                                    <input type="password" name="logkey" className="form-control" required defaultValue={this.props.logkey} placeholder="Register key..."></input>
                                </div>
                                <button type="submit" className="btn btn-block btn-outline-secondary mt-2" name="register">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Register