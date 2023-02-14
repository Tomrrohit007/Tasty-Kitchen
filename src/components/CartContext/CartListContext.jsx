import React, { useState, useContext} from "react";

const CartContext = React.createContext()

let initialList = localStorage.getItem("cartList");
const initialCartList = initialList === null? [] : JSON.parse(initialList);


export const ContextProvider=({children})=>{
    const [cartList, setCartList] = useState(initialCartList)
    
    return <CartContext.Provider value={{cartList, setCartList}}>
        {children}
    </CartContext.Provider>
}

export const CartGlobal = ()=>{
    return useContext(CartContext)
}