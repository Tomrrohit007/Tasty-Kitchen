import React, { useState, useContext} from "react";

const HeaderContext = React.createContext()

export const HeaderProvider=({children})=>{
    const [activeRoute, changeRoute] = useState("")
    return <HeaderContext.Provider value={{activeRoute, changeRoute}}>
        {children}
    </HeaderContext.Provider>
}

export const HeaderGlobal = ()=>{
    return useContext(HeaderContext)
}