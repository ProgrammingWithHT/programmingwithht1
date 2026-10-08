import React, { useEffect, useState } from 'react';
import Avatar from "@mui/material/Avatar";
import { authUser } from "./fake-db";
import { ListItemIcon, ListItemText, ThemeProvider, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import JumboDdPopover from "@jumbo/components/JumboDdPopover";
import Div from "@jumbo/shared/Div";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";
import useJumboAuth from "@jumbo/hooks/useJumboAuth";
import PopUp from 'app/pages/PopUp';
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'app/redux/actions/userAction';
import PasswordIcon from '@mui/icons-material/Password';

const AuthUserDropdown = () => {
    const dispatch = useDispatch();
    const { error, loading, isAuthenticated,user } = useSelector(
        (state) => state?.user
    );
    console.log(user)
    const {sidebarOptions, setSidebarOptions} = useJumboLayoutSidebar();
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    
    // const [data1, setData1] = useState(() => {
    //     const savedData = localStorage.getItem('data');
    //     return savedData ? JSON.parse(savedData) : null;
    // });

    // Update localStorage whenever data1 changes
    // useEffect(() => {
    //     if (data1) {
    //         localStorage.setItem('data', JSON.stringify(data1));
    //     }
    // }, [data1]);

    const navigate = useNavigate();
    const { theme } = useJumboTheme();
    const { setAuthToken } = useJumboAuth();

    const onLogout = async () => {
        dispatch(logout());
        
    };



    return (
        <ThemeProvider theme={theme}>
            <JumboDdPopover
                triggerButton={
                    <Avatar
                        src={user?.profileImage}
                        // authUser.profile_pic?
                        sizes={"small"}
                        sx={{ boxShadow: 25, cursor: 'pointer' }}
                    />
                }
            >
                <Div sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: theme => theme.spacing(2.5),
                }}>
                    <Avatar src={user?.profileImage} alt={user?.name ? user.firstName : "Z" } sx={{ width: 60, height: 60, mb: 2 }} />
                    <Typography variant={"h5"}>{user?.firstName? user.firstName+" "+user.lastName : "xyz" }</Typography>
                    <Typography variant={"body1"} color="text.secondary">{user?.email? user.email : "abc@xyz.com" }</Typography>
                </Div>
                <Divider />
                <nav>
                    <List disablePadding sx={{ pb: 1 }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <PersonOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" sx={{ my: 0 }} onClick={() => navigate("/profile")}/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <EditOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Edit Profile" sx={{ my: 0 }} onClick={()=> navigate("/profile")} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <PasswordIcon />
                            </ListItemIcon>
                            <ListItemText primary="Update Password" sx={{ my: 0 }} onClick={()=> navigate("/updatepassword")} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <RepeatOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText onClick={() => navigate("/samples/content-layout")} primary="Switch User"
                                sx={{ my: 0 }} />
                        </ListItemButton>
                        <ListItemButton onClick={onLogout}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ my: 0 }} />
                        </ListItemButton>
                    </List>
                </nav>
            </JumboDdPopover>

            <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />

        </ThemeProvider>
    );
};

export default AuthUserDropdown;
