import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, TextField, IconButton, InputAdornment, Typography, Container, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PopUp from '../PopUp';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, loadUser, register } from 'app/redux/actions/userAction';
import CircularProgress from '@mui/material/CircularProgress';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/(?=.*[0-9])/, 'Password must contain a number.')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
});

const Register = () => {
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state?.user
    );
    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error === "Please Login to access this resource") {
            dispatch(clearErrors());
        } else if (error === undefined) {
            console.log("");
        } else if (error !== null) {
            setLoader(false);
            setShowPopup(true);
            setMessage(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [dispatch, isAuthenticated, error, loading]);

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check for valid file type
            const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setGeneralError('Invalid file type. Please upload a .png, .jpg, .jpeg image or .pdf document.');
                setProfileImage(null);
                setProfileImageUrl('');
                return;
            } else {
                setGeneralError('');
            }
            setProfileImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async () => {
        const data = new FormData();
        data.append("file", profileImage);
        data.append("upload_preset", "oo76bqt8");
        try {
            let res = await fetch("https://api.cloudinary.com/v1_1/dvrxdremd/image/upload", {
                method: "post",
                body: data,
            });
            const urlData = await res.json();
            return urlData.url;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container maxWidth="xs" style={{ padding: '2rem' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h2" gutterBottom>
                    Signup
                </Typography>
                <Avatar
                    src={profileImageUrl}
                    alt="Profile Image"
                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                />
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        setLoader(true);
                        if (!profileImage) {
                            setGeneralError('Profile image is required.');
                            setLoader(false);
                            setSubmitting(false);
                            return;
                        }
                        const imageUrl = await uploadImage(); // Upload image to Cloudinary and get the URL
                        const formData = {
                            ...values,
                            profileImage: imageUrl // Add the Cloudinary URL to form data
                        };

                        dispatch(register(formData));

                        setSubmitting(false);
                    }}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form style={{ width: '100%' }}>
                            <Box mb={2}>
                                <Field
                                    as={TextField}
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
                                    error={errors.firstName && touched.firstName}
                                />
                            </Box>

                            <Box mb={2}>
                                <Field
                                    as={TextField}
                                    name="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
                                    error={errors.lastName && touched.lastName}
                                />
                            </Box>

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

                            <Box mb={2}>
                                <Field
                                    as={TextField}
                                    name="confirmPassword"
                                    label="Confirm Password"
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
                                    helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
                                    error={errors.confirmPassword && touched.confirmPassword}
                                />
                            </Box>

                            <Box mb={2} display="flex" alignItems="center">
                                <input
                                    accept=".png, .jpg, .jpeg"
                                    id="profile-image"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleProfileImageChange}
                                />
                                <label htmlFor="profile-image">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <AddAPhotoIcon />
                                    </IconButton>
                                </label>
                                {profileImage && (
                                    <Typography variant="body2" color="textSecondary">
                                        {profileImage.name}
                                    </Typography>
                                )}
                            </Box>

                            {generalError && (
                                <Typography color="error" variant="body2" gutterBottom>
                                    {generalError}
                                </Typography>
                            )}

                            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}
                                disabled={isSubmitting}>
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
                                onClick={() => { dispatch(clearErrors()); navigate('/login') }}
                            >
                                Login
                            </Button>

                            <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default Register;
