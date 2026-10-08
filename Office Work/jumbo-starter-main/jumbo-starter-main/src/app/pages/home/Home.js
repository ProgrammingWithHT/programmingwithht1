import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp';
import { useSelector } from 'react-redux';

const Home = () => {
    const navigate = useNavigate();
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state?.user
    );
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if(!isAuthenticated){
            setMessage(error);
            setShowPopup(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000); // 3 seconds delay
            navigate('/login')
        }
    }, [navigate,isAuthenticated,error,loading]);

    if (showPopup) {
        return <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />;
    }



    return (
        <div>
            <h2>Sample blank pageee</h2>
            <p>This page is just to showcase the way you can add your own pages.</p>
            <p>Happy Coding!</p>
        </div>
    );
};

export default Home;