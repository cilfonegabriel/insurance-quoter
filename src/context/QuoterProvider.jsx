import { createContext, useState } from "react";

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [datos, setDatos] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeData = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const quoterInsurance = () => {
        
    }

    return(
        <QuoterContext.Provider
            value={{
                datos,
                handleChangeData,
                setError,
                error,
                quoterInsurance
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