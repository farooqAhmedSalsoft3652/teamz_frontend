import axiosInstance from '../../Config/axiosConfig.js';
import { buildFormData } from '../../Utils/Utils.jsx';
import { headCoachManagementData } from '../../Config/data.jsx';

// GET
export const getHeadCoachListing = async (params) => {
  try {
    const data  = headCoachManagementData;
    // const { data } = await axiosInstance.get('/admin-api/users', {
    //   params,
    // });
    return data.detail; // Assume this returns the listing object
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

export const updateStatus = async (id) => {
  try {
    const response = await axiosInstance.post(`/admin-api/users/${id}`);
    const {
      data: { message, status },
    } = response;
    return { message, status }; // Assume this returns the success object
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// DETAILS
export const viewUser = async (id) => {
  try {
    const data = userManagementData.detail.data.find(u => u.id === Number(id));
    return data;
    
    // const { data } = await axiosInstance.get(`/admin-api/users/${id}`);
    // return data.detail; // Assume this returns success obj


  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// USER BRANCHES
export const getUserBranches = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/admin-api/users/branches/${id}`);
    return data.detail; // Assume this returns success obj
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// GET ACCOUNT TYPE
export const getAccountType = async (type) => {
  try {
    const { data } = await axiosInstance.get(
      `/user-api/beneficiary-register/type?type=${type}`
    );
    return data.detail; // Assume this returns success obj
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};
