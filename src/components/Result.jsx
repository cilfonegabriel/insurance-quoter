import useQuoter from "../hooks/useQuoter"
import { BRANDS,PLANS } from "../constants"

const Result = () => {

    const {result, datos} = useQuoter()
    const { brand, plan, year } = datos

    const [ nameBrand ] = BRANDS.filter(b => b.id === Number(brand))
    const [ namePlan ] = PLANS.filter(p => p.id === Number(plan))


    if (result === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Summary
            </h2>

            <p className="my-2">
                <span className="font-bold">Brand: </span>
                {nameBrand.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {namePlan.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Year of the vehicle: </span>
                {year}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total quote: </span>
                {result}
            </p>
        </div>
    )
}

export default Result
