import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import Crypto from "app/pages/dashboard/Crypto/Crypto";
import Page from "@jumbo/shared/Page";
import BuyPackage from "app/pages/package/BuyPackage";
import Register from "app/pages/RegisterPage";
import Login from "app/pages/LoginPage";
import Profile from "app/pages/ProfilePage/Profile";
import UpdatePassword from "app/pages/UpdatePassword/UpdatePassword";
import PaymentGate from "app/pages/PaymentGate/PaymentGate";
import AddFinance from "app/pages/AddFinance";

/**
 * Inlined Protected Route logic within the route configuration.
 */

/**
 routes accessible to authenticated users only
 **/
const routesForAuthenticatedOnly = [
    // {
    //     path: "/",
    //     element: <Page component={Home} />
    // },
    {
        path: "/",
        element: <Page component={AddFinance} />
    },
    {
        path: "/dashboard",
        element: <Page component={AddFinance} />
    },
    // {
    //     path: "/dashboard",
    //     element: <Page component={Crypto} />
    // },
    // {
    //     path: "/profile",
    //     element: <Page component={Profile} />
    // },
    // {
    //     path: "/updatePassword",
    //     element: <Page component={UpdatePassword} />
    // },
    // {
    //     path: "/paymentGateway",
    //     element: <Page component={PaymentGate} />
    // },
    // {
    //     path: "/buy-package",
    //     element: <Page component={BuyPackage} />
        
    // },
    // {
    //     path: "/add-finance",
    //     element: <Page component={AddFinance} />
    // },
];

/**
 routes accessible to anonymous users only
 **/
const routesForNotAuthenticatedOnly = [
    {
        path: "/register",
        element: <Page component={Register} />
    },
    {
        path: "/login",
        element: <Page component={Login} />
    },
    {
        path: "/*",
        element: <Page component={Login} />
    }
];



const routes = [
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export { routes as default, routesForAuthenticatedOnly, routesForNotAuthenticatedOnly};
