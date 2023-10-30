import { createContext, useState } from "react";
import { getDifferenceYear } from "../helpers";

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
        // Base
        let result = 2000

        //Get the difference of years
        const difference = getDifferenceYear(datos.year)
        
        //Subtract 3% for each year
        result -= ((difference * 3) * result) / 100
        
        //American 15%
        //European 30%
        //Asian 5%

        //Basic 20%
        //Complete 50%
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