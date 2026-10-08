import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp';
import { addExpense, addIncome } from 'app/backendApis/ApisBackend';
import { useDispatch, useSelector } from 'react-redux';

// Validation Schema for both Expense and Income
const FinanceSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  amount: Yup.number().positive('Amount must be positive').required('Amount is required'),
});

const AddFinance = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [loading1, setLoading1] = useState(false);
  const [financeType, setFinanceType] = useState(''); // 'expense' or 'income'
  const [openDialog, setOpenDialog] = useState(false); // Control dialog open state
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector((state) => state?.user);

  // Handle Finance (Expense/Income) Submission
  const handleSubmit = async (values, { setSubmitting }) => {
    const financeData = {
      ...values,
    };

    setLoading1(true);
    const apiCall = financeType === 'expense' ? addExpense : addIncome;
    await apiCall(
      financeData,
      (response) => {
        setShowPopup(true);
        setMessage('Done Successfully');
        setLoading1(false);
        setOpenDialog(false); // Close the dialog after success
      },
      (error) => {
        setShowPopup(true);
        setMessage(error.response?.data?.message || 'Failed to process.');
        setLoading1(false);
      }
    );
    setSubmitting(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, error, loading]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add Finance (Expense or Income)
        </Typography>

        {/* Finance Type Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Finance Type</InputLabel>
          <Select
            value={financeType}
            onChange={(e) => {
              setFinanceType(e.target.value);
              setOpenDialog(true); // Open the dialog when finance type is selected
            }}
            label="Select Finance Type"
          >
            <MenuItem value="expense">Add Expense</MenuItem>
            <MenuItem value="income">Add Income</MenuItem>
          </Select>
        </FormControl>

        {/* Conditionally render form fields based on financeType */}
        {financeType && (
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>{financeType === 'expense' ? 'Add Expense' : 'Add Income'}</DialogTitle>
            <DialogContent>
              <Formik
                initialValues={{
                  name: '',
                  amount: '',
                }}
                validationSchema={FinanceSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box mb={2}>
                      <Field
                        as={TextField}
                        name="name"
                        label="Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        helperText={<ErrorMessage name="name" />}
                        error={Boolean(ErrorMessage.name === 'name')}
                      />
                    </Box>
                    <Box mb={2}>
                      <Field
                        as={TextField}
                        name="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        helperText={<ErrorMessage name="amount" />}
                        error={Boolean(ErrorMessage.name === 'amount')}
                      />
                    </Box>
                    <DialogActions>
                      <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                      <Button type="submit" disabled={isSubmitting || loading1}>
                        {isSubmitting || loading1 ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                      </Button>
                    </DialogActions>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Dialog>
        )}

        {/* PopUp for showing success/error messages */}
        <PopUp message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
      </Box>
    </Container>
  );
};

export default AddFinance;
