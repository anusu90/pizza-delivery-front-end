import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from "../CONTEXTS/contexts";
import CartItem from "../cartitem/cartitem"

export default function Cart() {

    const [user, setuser] = useContext(AppContext).whichUser;
    const [cartList, setCartList] = useContext(AppContext).cartState;
    const [total, setTotal] = useState(0);

    let sum = 0;

    useEffect(() => {
        cartList.forEach(element => {
            sum = sum + parseInt(element.price);
        });
        setTotal(sum)

    }, [cartList]);


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-text">Welcome-{user.firstname}</div>
                <div className="col-md-4 footer-text">Items will be delivered at {user.address}</div>
                <div className="col-md-4 footer-text">Total is: {total} </div>
            </div>
            <div className="row">

                {
                    cartList.map((item, index) => {
                        return (
                            <CartItem item={item} key={index} ></CartItem>
                        )
                    })

                }

            </div>
        </div>


    )
}