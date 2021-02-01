import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"





function Login(props) {
    let history = useHistory();
    let location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLoginAttempt = (e) => {

        e.preventDefault();
        console.log(email, password)

    }


    return (
        <div className="row h-75 align-items-center">
            <div className="col-lg-8 offset-lg-2">
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label className="form-label">Email address</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="row justify-content-center">
                        <Button style={{ width: "50%" }} variant="primary" type="submit" onClick={(e) => handleLoginAttempt(e)}>
                            Submit
                        </Button>

                    </div>

                    <br />

                    <div className="row justify-content-center">

                        <Link>
                            <span className="forgotPass">
                                Forgot Password?</span>
                        </Link>
                    </div>

                    <div className="row justify-content-center">
                        <Form.Label>{error}</Form.Label>
                    </div>

                </Form>
            </div>

        </div>
    )
}

export default Login