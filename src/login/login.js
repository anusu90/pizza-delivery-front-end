import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from "react-bootstrap"





function Login(props) {
    let history = useHistory();
    let location = useLocation();
    console.log(history, location);
    return (
        <div className="row">
            {console.log(props)}
            <div>
                <Button onClick={() => {
                    history.push("/menu")
                }}> Click Me </Button>
            </div>

        </div>
    )
}

export default Login