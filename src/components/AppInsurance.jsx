import Form from "./Form"
import Spinner from "./Spinner"
import useQuoter from "../hooks/useQuoter"
import Result from "./Result"

function AppInsurance() {

    const {result, loading} = useQuoter()

    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Car insurance quote</h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />

                {loading ? <Spinner /> : <Result /> }
            </main>
        </>
    )
}

export default AppInsurance
