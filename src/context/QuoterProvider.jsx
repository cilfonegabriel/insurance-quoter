import { createContext, useState } from "react";

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [datos, setDatos] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const handleChangeData = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
        
    }

    return(
        <QuoterContext.Provider
            value={{
                datos,
                handleChangeData
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext