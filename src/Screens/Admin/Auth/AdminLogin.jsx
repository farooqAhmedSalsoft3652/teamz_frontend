import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import CustomButton from '../../../Components/CustomButton';
// import CustomInput from '../../../Components/CustomInput';
import { useLogin } from '../../../Hooks/useLogin';
import { usePageTitle } from '../../../Hooks/usePageTitle';
import { AuthLayout } from '../../../Layout/AdminLayout/Auth/AuthLayout';
import { adminLoginValidationSchema } from '../../../Utils/Validations/ValidationSchemas';
import './Auth.css';
import TextInput from '../../../Components/Common/FormElements/TextInput';
import { FormCheck } from 'react-bootstrap';

const AdminLogin = () => {
  const loginMutation = useLogin('admin');
  usePageTitle('Admin Login');

  const handleSubmit = (values) => {
    loginMutation.mutate(values);
  };

  return (
    <AuthLayout authTitle="" authParagraph="">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={adminLoginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className="mt-3 login-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <TextInput
                id="email"
                name="email"
                label="Email Address"
                type="text"
                placeholder="Enter Your Email"
                value={values.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                required
                iconPosition="left" // or "right"
                maxLength={100} // ✅ extra prop
              />
            </div>
            <div className="mb-3">
              <TextInput
                id="Password"
                name="Password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
                required
              />
            </div>

            <div className="d-flex align-items-center justify-content-between mt-1 flex-wrap gap-sm-0 gap-2">
              <FormCheck
                type={'checkbox'}
                name="rememberMe"
                id="rememberMe"
                label={`Remember Me`}
              />
              <Link to={'/admin/forget-password'} className="fw-medium text-link">
                  Forgot Password?
                </Link>
            </div>
            <div className="mt-4 text-center beechMein">
              <CustomButton
                type="submit"
                text="Login"
                loading={loginMutation.isPending}
                disabled={loginMutation.isPending}
              />
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default AdminLogin;
