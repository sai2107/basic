
import { createContext, useState } from "react";



export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const contextValue={
        sidebarVisible,
        setSidebarVisible
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider

 