import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            <h2>This is root files</h2>
        </div>
    );
};

export default Root;