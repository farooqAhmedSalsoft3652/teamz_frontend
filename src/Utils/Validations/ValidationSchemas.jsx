import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  business_name: Yup.string()
    .required('Business Name is required')
    .max(50, 'Business Name must be at most 50 characters'),
  user_name: Yup.string()
    .required('Full Name is required')
    .matches(
      /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
      'Full Name must contain only letters'
    )
    .max(39, 'Full Name must be at most 39 characters'),
  user_id: Yup.string()
    .required('User ID is required')
    .max(30, 'User ID must be at most 30 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be atleast 8 characters long'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Please re-enter your new password'),
});
export const changePasswordValidation = Yup.object().shape({
  current_password: Yup.string().required('Current Password is required'),
  password: Yup.string()
    .required('New Password is required')
    .min(8, 'Password must be atleast 8 characters long'),
  password_confirmation: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match.')
    .label('Confirm Password'),
});
export const loginValidationSchema = Yup.object().shape({
  user_id: Yup.string().required('User ID is required'),
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});
export const forgotEmail = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
});
export const forgotCode = Yup.object().shape({
  verificationCode: Yup.string()
    .required('Verification code is required')
    .matches(/^\d{4}$/, 'Verification code must be 4 digits'),
});
export const forgotPassword = Yup.object().shape({
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  password_confirmation: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .label('Confirm Password'),
});
export const adminLoginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const editAdminProfileSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
});

export const changePasswordSchema = Yup.object({
  current_password: Yup.string().required('Current Password is required'),
  password: Yup.string().required('New Password is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Please re-enter your new password'),
});

export const promoCodeSchema = Yup.object().shape({
  code_name: Yup.string().required('Promocode name is required'),
  code_discount: Yup.number()
    .typeError('Discount must be a number')
    .required('Discount is required')
    .min(1, 'Minimum 1%')
    .max(100, 'Maximum 100%'),
});
