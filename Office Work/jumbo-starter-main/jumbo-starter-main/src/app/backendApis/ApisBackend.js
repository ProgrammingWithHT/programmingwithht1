import axios from 'axios';


export const getAllUserData = async(values,callback, errorCallback) =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
      const response = await axios.get(`/api/v1/get-all-user`,values,config);

      if (callback) {
        callback(response); // Pass the response data to the callback
      }
    } catch (error) {
      console.log('Error occurred while getting all-user',error);
      if (errorCallback) {
        errorCallback(error); // Pass the error to the error callback
      }
    }
}

export const addExpense = async(values,callback, errorCallback) =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
      const response = await axios.post(`/api/v1/add-expensive`,values,config);

      if (callback) {
        callback(response); // Pass the response data to the callback
      }
    } catch (error) {
      console.log('Error occurred while add expensive',error);
      if (errorCallback) {
        errorCallback(error); // Pass the error to the error callback
      }
    }
}

export const addIncome = async(values,callback, errorCallback) =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
      const response = await axios.post(`/api/v1/add-income`,values,config);

      if (callback) {
        callback(response); // Pass the response data to the callback
      }
    } catch (error) {
      console.log('Error occurred while add income',error);
      if (errorCallback) {
        errorCallback(error); // Pass the error to the error callback
      }
    }
}