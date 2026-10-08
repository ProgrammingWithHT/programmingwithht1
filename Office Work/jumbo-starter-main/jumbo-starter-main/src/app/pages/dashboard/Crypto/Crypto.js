import React, { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PopUp from './../../PopUp';
import BitcoinPrice from './components/BitcoinPrice/BitcoinPrice';
import RipplePrice from './components/RipplePrice/RipplePrice';
import EthereumPrice from './components/EthereumPrice/EthereumPrice';
import LitecoinPrice from './components/LitecoinPrice/LitecoinPrice';
import PortfolioBalance from 'app/shared/metrics/PortfolioBalance/PortfolioBalance';
import EarningExpenses from 'app/shared/metrics/EarningExpenses/EarningExpenses';
import WordOfTheDay1 from 'app/shared/widgets/WordOfTheDay1/WordOfTheDay1';
import EarnRewardCard from 'app/shared/widgets/EarnRewardCard/EarnRewardCard';
import CurrencyCalculator from 'app/shared/widgets/CurrencyCalculator/CurrencyCalculator';
import LatestPosts from 'app/shared/widgets/LatestPosts/LatestPosts';
import MarketingCampaign from 'app/shared/widgets/MarketingCampaign/MarketingCampaign';
import CryptoNews from 'app/shared/widgets/CryptoNews/CryptoNews';
import { useDispatch, useSelector } from 'react-redux';

const Crypto = () => {
    const dispatch = useDispatch()
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state?.user
    );
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

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
        <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={3}>
                <BitcoinPrice />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <RipplePrice />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <EthereumPrice />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <LitecoinPrice />
            </Grid>
            <Grid item xs={12} lg={6}>
                <PortfolioBalance />
            </Grid>
            <Grid item xs={12} lg={6}>
                <EarningExpenses />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <WordOfTheDay1 />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <EarnRewardCard />
            </Grid>
            <Grid item xs={12} lg={4}>
                <CurrencyCalculator />
            </Grid>
            <Grid item xs={12} lg={6}>
                <LatestPosts scrollHeight={356} />
            </Grid>
            <Grid item xs={12} lg={6}>
                <MarketingCampaign />
            </Grid>
            <Grid item xs={12}>
                <CryptoNews />
            </Grid>
        </Grid>
    );
};

export default Crypto;
