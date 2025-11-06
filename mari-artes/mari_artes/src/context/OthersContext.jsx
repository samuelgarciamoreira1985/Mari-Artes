import { useState,useRef,createContext } from "react";

export const OthersFeaturesContext = createContext()

export const OthersFeaturesProvider = ({ children }) => {

    const [searchInputValue,setSearchInputValue] = useState("")
    const sectionSearchRef = useRef(null)

    return (

        <OthersFeaturesContext.Provider value={{ searchInputValue,setSearchInputValue, sectionSearchRef}}>
            {children}
        </OthersFeaturesContext.Provider>

    )

}