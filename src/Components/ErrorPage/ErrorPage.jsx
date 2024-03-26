import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold mt-40 text-center text-red-400">Ooopps!!</h2>
            <h2 className="text-7xl font-bold text-center mt-5">404 <br />Page NOt Found</h2>
            <div className="flex justify-center mt-5 items-center">
            <Link to='/'><button className="btn bg-green-300 font-bold">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;