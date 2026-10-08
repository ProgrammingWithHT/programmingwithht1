import React from "react";

import routes from "./routes";
import useJumboRoutes from "@jumbo/hooks/useJumboRoutes";
import { useSelector } from "react-redux";

const AppRoutes = () => {


    // console.log(routes)


    const appRoutes = useJumboRoutes(routes);
    
    const {loading,user} = useSelector((user)=>user.user)
    // console.log(user?.role);

    return (
        <React.Fragment>
            {
                loading? <div className="loader">
                <svg className="circular-loader" viewBox="25 25 50 50">
                    <circle className="loader-path" cx="50" cy="50" r="20" />
                </svg>
            </div> : appRoutes
            }
        </React.Fragment>
    );
};
export default AppRoutes;
