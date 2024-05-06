import Form from 'react-bootstrap/Form';
import '../Styles/UserLogin.css'
import { useState } from 'react';


const UserLogin = () => {

    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

    // function varifyMerchant(e){
    //     e.priventDefault();
    //     axio
    // }
    return (
        <div className="userlogin">
            <Form>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <button className='btn btn-success mx-5'>Sign in</button>
                    <button className='btn btn-danger mx-5'>Sign up</button>
                </Form.Group>

            </Form>
        </div>
    );
}

export default UserLogin;