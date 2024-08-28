import Header from "./Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Browse = () => {

    useEffect(() => 
        window.scrollTo(0, 0)
    , []);
    
    return  (
        <div className="w-full overflow-hidden m-0 p-0">
            <Header />
            <Outlet />
        </div>
    );
};

export default Browse;