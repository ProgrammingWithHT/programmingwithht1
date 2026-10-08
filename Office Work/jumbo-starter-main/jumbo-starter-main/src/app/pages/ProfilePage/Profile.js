import React, { useEffect, useState } from 'react';
import { Container, Typography, Avatar, Box, Button, TextField, IconButton, CircularProgress } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from '../PopUp';
import { clearErrors, loadUser, updateProfile } from 'app/redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { UPDATE_PROFILE_RESET } from 'app/redux/constants/userConstants';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    const { isUpdated, error } = useSelector((state) => state.profile);

    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profileImage: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [imageError, setImageError] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        if (user) {
            setUserData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profileImage: user.profileImage,
            });
        }
    }, [user]);

    const uploadImage = async () => {
        if (profileImage !== null) {
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
        } else {
            return userData.profileImage;
        }
    };

    const handleProfileImageChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        const fileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (file && fileTypes.includes(file.type)) {
            setProfileImage(file);
            setFieldValue('profileImage', URL.createObjectURL(file));
            setImageError('');
        } else {
            setImageError('Only .png, .jpg and .jpeg formats are allowed');
        }
    };

    const handleSubmit = async (values) => {
        const imageUrl = await uploadImage();
        const formData = {
            ...values,
            profileImage: imageUrl
        };
        setUserData(formData);
        dispatch(updateProfile(formData));
        setShowPopup(true);
        setMessage('Done Successfully');
    };

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    useEffect(() => {
        if (error) {
            setShowPopup(true);
            setMessage(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            setShowPopup(true);
            setMessage("Done Successfully");
            dispatch(loadUser());

            navigate("/profile");

            dispatch({
                type: UPDATE_PROFILE_RESET,
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
        <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
            <Avatar src={profileImage ? URL.createObjectURL(profileImage) : userData.profileImage} alt="Profile" style={{ width: '100px', height: '100px' }} />
            <Typography variant="h4" gutterBottom>
                Profile Page
            </Typography>
            {!isEditMode ? (
                <Box sx={{ mt: 3, width: '100%' }}>
                    <Typography variant="body1"><strong>First Name:</strong> {userData.firstName}</Typography>
                    <Typography variant="body1"><strong>Last Name:</strong> {userData.lastName}</Typography>
                    <Typography variant="body1"><strong>Email:</strong> {userData.email}</Typography>
                    <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }} onClick={handleEditClick}>
                        Edit
                    </Button>
                </Box>
            ) : (
                <Formik
                    initialValues={userData}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form style={{ width: '100%' }}>
                            <Field
                                as={TextField}
                                fullWidth
                                label="First Name"
                                name="firstName"
                                margin="normal"
                                helperText={<ErrorMessage name="firstName" />}
                                error={Boolean(ErrorMessage.name === 'firstName')}
                            />
                            <Field
                                as={TextField}
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                margin="normal"
                                helperText={<ErrorMessage name="lastName" />}
                                error={Boolean(ErrorMessage.name === 'lastName')}
                            />
                            <Field
                                as={TextField}
                                fullWidth
                                label="Email"
                                name="email"
                                margin="normal"
                                helperText={<ErrorMessage name="email" />}
                                error={Boolean(ErrorMessage.name === 'email')}
                            />
                            <Box mb={2} display="flex" alignItems="center">
                                <input
                                    accept=".png, .jpg, .jpeg"
                                    id="profile-image"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleProfileImageChange(e, setFieldValue)}
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
                            {imageError && <Typography color="error">{imageError}</Typography>}
                            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                                {loader ? <CircularProgress size={24} color="inherit" /> : "Submit"}
                            </Button>

                            <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
                        </Form>
                    )}
                </Formik>
            )}
        </Container>
    );
};

export default Profile;
