import JumboDemoCard from '@jumbo/components/JumboDemoCard/JumboDemoCard';
import Div from '@jumbo/shared/Div/Div';
import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp';
import { useDispatch, useSelector } from 'react-redux';


const BuyPackage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state?.user
    );
    
    // const [showPopup, setShowPopup] = useState(false);
    // const [message, setMessage] = useState("");
    
    // useEffect(() => {
    //     const value = localStorage.getItem('token');
    //     if (value === null) {
    //         setMessage("User Not Logged In");
    //         setShowPopup(true);
    //         setTimeout(() => {
    //             navigate('/login');
    //         }, 1000); // 3 seconds delay
    //     } 
    // }, [navigate]);

    // if (showPopup) {
    //     return <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />;
    // }
    useEffect(() => {
        console.log("dashboarddd")
        // const data = localStorage.getItem('token');
        if(!isAuthenticated){
            navigate('/login')
        }
    },  [isAuthenticated,error,loading])

    return (
        <JumboDemoCard title={"Sizes"} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '24ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <Div>
                    <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                    />
                    <TextField label="Size" id="outlined-size-normal" defaultValue="Normal"/>
                </Div>
                <Div>
                    <TextField
                        label="Size"
                        id="filled-size-small"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        label="Size"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                    />
                </Div>
                <Div>
                    <TextField
                        label="Size"
                        id="standard-size-small"
                        defaultValue="Small"
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        label="Size"
                        id="standard-size-normal"
                        defaultValue="Normal"
                        variant="standard"
                    />
                </Div>
            </Box>
        </JumboDemoCard>
    );
};

export default BuyPackage;
