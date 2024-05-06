import Form from 'react-bootstrap/Form';
import '../Styles/MerchantLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const MerchantLogin = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate=useNavigate()

    function varifyMerchant(e) {
        e.preventDefault();
        axios.post(`http://localhost:8010/merchant/verify-by-email?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data.data);

                localStorage.setItem("Merchant",JSON.stringify(res.data.data))
                navigate("/merchanthomepage")
                alert("Login Successfull")
            })
            .catch((error) => {
                console.log(error);
                alert("Invalid Credential")
            })
    }

    return (
        <div className="merchantlogin">
            <Form>
            <h1>Merchant Login Page</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <button onClick={varifyMerchant} className='btn btn-success mx-5'>Sign in</button>
                    <button className='btn btn-danger mx-5'>
                        <Link to="/merchantsignup">Sign up</Link>
                    </button>
                </Form.Group>

            </Form>
        </div>   
    );
}

export default MerchantLogin;