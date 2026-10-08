import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updatePassword } from 'app/redux/actions/userAction';
import { UPDATE_PASSWORD_RESET } from 'app/redux/constants/userConstants';
import PopUp from '../PopUp';

const UpdatePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .required('Current password is required'),
    newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/(?=.*[0-9])/, 'Password must contain a number')
        .required('New password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

const UpdatePassword = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const resetFormRef = useRef(null);

    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const { error, isUpdated } = useSelector((state) => state.profile);

    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        dispatch(updatePassword(values))
        resetFormRef.current = resetForm; // Store the resetForm function in ref
        
        // Handle password update logic here
        console.log(values);
        // Simulate an API call
        setTimeout(() => {
            setSubmitting(false);
            // Here you could handle errors or success messages
        }, 1000);
    };

    useEffect(() => {
        if (error) {
            setShowPopup(true);
            setMessage(error)
            dispatch(clearErrors());
        }

        if (isUpdated) {
            setShowPopup(true);
            setMessage("Done Successfully");

            // Reset the form
            if (resetFormRef.current) {
                resetFormRef.current();
            }

            // navigate("/updatePassowrd");
            dispatch({
                type: UPDATE_PASSWORD_RESET,
            });
        }

        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [dispatch, error, navigate, isUpdated]);

    if (loading || !user) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    padding: 2
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Update Password
                </Typography>
                <Formik
                    initialValues={{
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                    }}
                    validationSchema={UpdatePasswordSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form style={{ width: '100%' }}>
                            <Box mb={2}>
                                <Field
                                    as={TextField}
                                    name="currentPassword"
                                    label="Current Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    helperText={<ErrorMessage name="currentPassword" />}
                                    error={Boolean(ErrorMessage.name === 'currentPassword')}
                                />
                            </Box>
                            <Box mb={2}>
                                <Field
                                    as={TextField}
                                    name="newPassword"
                                    label="New Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    helperText={<ErrorMessage name="newPassword" />}
                                    error={Boolean(ErrorMessage.name === 'newPassword')}
                                />
                            </Box>
                            <Box mb={2}>
                                <Field
                                    as={TextField}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    helperText={<ErrorMessage name="confirmPassword" />}
                                    error={Boolean(ErrorMessage.name === 'confirmPassword')}
                                />
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '1rem' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Submit"}
                            </Button>
                            {/* Replace this with actual success/error message handling */}
                            <Box mt={2}>
                                {/* <Alert severity="success">Password updated successfully</Alert> */}
                                {/* <Alert severity="error">Error updating password</Alert> */}
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        
            <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Container>
    );
};

export default UpdatePassword;
