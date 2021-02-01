import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReadyPizzaItem from "../ready-pizza-item/readypizzaitem"


function Menu() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(async () => {
        console.log(String(process.env.REACT_APP_BACKEND_URL) + "/readypizza");
        console.log(`${process.env.NODE_ENV}+"/readypizza"`);
        axios.get(String(process.env.REACT_APP_BACKEND_URL) + "/readypizza")
            .then(response => setMenuItems(response.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="row">

            {
                menuItems.map(item => {
                    return (
                        <div className="col-lg-3">
                            <ReadyPizzaItem item={item}></ReadyPizzaItem>
                        </div>

                    )
                })
            }

        </div>
    )
}


export default Menu