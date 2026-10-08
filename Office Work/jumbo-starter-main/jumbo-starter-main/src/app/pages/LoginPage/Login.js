import React, { Fragment, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, InputAdornment, Typography, Container, Box, CircularProgress } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PopUp from '../PopUp';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login } from 'app/redux/actions/userAction';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/(?=.*[0-9])/, 'Password must contain a number.')
        .required('Required'),
});

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state?.user
    );
    const [loader, setLoader] = useState(false)
    const [generalError, setGeneralError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (error === "Please Login to access this resource") {
            dispatch(clearErrors());
        } else if (error === undefined) {
            console.log("")
        }
        else if (error !== null) {
            setLoader(false)
            setShowPopup(true)
            setMessage(error)
            dispatch(clearErrors)
        }
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [dispatch, isAuthenticated, error, loading])

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //   const handleResize = () => setWindowWidth(window.innerWidth);
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // const containerStyle = {
    //   padding: '2rem',
    //   marginLeft: windowWidth > 1000 ? '15rem' : '0',
    // };

    return (
        <Fragment>
            {
                isAuthenticated ? "This Is No-Access Ways of Login Page"
                    :
                    (<Container maxWidth="xs" style={{ padding: '2rem' }}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h1" gutterBottom>
                                Sign In
                            </Typography>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    setLoader(true)
                                    dispatch(login(values))

                                    // resetForm('');
                                    // setGeneralError('');
                                    setSubmitting(false);
                                }}
                            >
                                {({ errors, touched, isSubmitting }) => (
                                    <Form style={{ width: '100%' }}>

                                        <Box mb={2}>
                                            <Field
                                                as={TextField}
                                                name="email"
                                                label="Email Address"
                                                variant="outlined"
                                                type="email"
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                helperText={errors.email && touched.email ? errors.email : ''}
                                                error={errors.email && touched.email}
                                            />
                                        </Box>

                                        <Box mb={2}>
                                            <Field
                                                as={TextField}
                                                name="password"
                                                label="Password"
                                                variant="outlined"
                                                type="password"
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PasswordIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                helperText={errors.password && touched.password ? errors.password : ''}
                                                error={errors.password && touched.password}
                                            />
                                        </Box>

                                        {generalError && (
                                            <Typography color="error" variant="body2" gutterBottom>
                                                {/* {generalError} */}
                                            </Typography>
                                        )}

                                        {/* <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            style={{ marginTop: '1rem' }}
                                            disabled={isSubmitting}
                                        >
                                            Submit
                                        </Button> */}

                                        <Button type="submit" variant="contained" color="primary" fullWidth style={{marginTop: '1rem'}} disabled={isSubmitting}>
                                            {loader ?
                                                <CircularProgress size={24} color="inherit" />
                                                : "Submit"}
                                        </Button>

                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            style={{ marginTop: '1rem' }}
                                            onClick={() => { dispatch(clearErrors()); navigate('/register') }}
                                        >
                                            Sign Up
                                        </Button>

                                        

                                        <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />

                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Container>)
            }
        </Fragment>
    );
};

export default Login;


