import React from "react";

import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import StoreIcon from '@mui/icons-material/Store';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import AddCardIcon from '@mui/icons-material/AddCard';

const menus = [
    {
        label: 'sidebar.menu.home',
        type: "section",
        children: [
            {
                uri: "/dashboard",
                label: 'Add Finance',
                type: "nav-item",
                icon: <GraphicEqIcon sx={{fontSize: 20}}/>
            },
            // {
            //     uri: "/dashboard",
            //     label: 'sidebar.menuItem.dashboard',
            //     type: "nav-item",
            //     icon: <GraphicEqIcon sx={{fontSize: 20}}/>
            // },
            // {
            //     uri: "/Register",
            //     label: 'Register User',
            //     type: "nav-item",
            //     icon: <HowToRegIcon sx={{fontSize: 20}}/>
            // },
            // {
            //     uri: "/login",
            //     label: 'Login User',
            //     type: "nav-item",
            //     icon: <LoginIcon sx={{fontSize: 20}}/>
            // },
            // {
            //     uri: "/add-finance",
            //     label: 'Add Finance',
            //     type: "nav-item",
            //     icon: <AddCardIcon sx={{fontSize: 20}}/>
            // },
            // {
            //     label: 'sidebar.menuItem.mui',
            //     type: "collapsible",
            //     icon: <GraphicEqIcon sx={{fontSize: 20}}/>,
            //     children: [
            //         {
            //             uri: "/mui/accordions",
            //             label: "sidebar.menuItem.accordions",
            //             type: "nav-item"
            //         },
            //         {
            //             uri: "/mui/alerts",
            //             label: "sidebar.menuItem.alerts",
            //             type: "nav-item"
            //         },
            //     ]
            // },
            
        ]
    },
  
];

export default menus;
