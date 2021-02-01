import React, { useState } from 'react'

export const AppContext = React.createContext()

export const AppProvider = (props) => {

    const [userStatus, setUserStatus] = useState(false);
    const [cartList, setCartList] = useState([]);

    return (
        <AppContext.Provider
            value={{ userState: [userStatus, setUserStatus], cartState: [cartList, setCartList] }}
        >

            { props.children}

        </AppContext.Provider >

    )

}


