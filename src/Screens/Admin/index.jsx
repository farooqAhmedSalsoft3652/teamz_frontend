import { Navigate, Route, Routes } from 'react-router-dom';

import AdminLogin from './Auth/AdminLogin';
import ForgetPassword from './Auth/ForgetPassword';
import ForgetPassword2 from './Auth/ForgetPassword2';
import ForgetPassword3 from './Auth/ForgetPassword3';
import Dashboard from './Dashboard/Dashboard';
import Notifications from './Notifications/Notifications';
import QueryManagement from './QueryManagement';
import QueryDetails from './QueryManagement/QueryDetails';
import PromoCodeManagement from './PromoCodeManagement';
import HeadCoachManagement from './HeadCoachManagement';
import SubscriptionLogs from './Subscription logs';
import SubscriptionPlan from './Subscription logs/SubscriptionPlan';
import SubscriptionDetails from './Subscription logs/SubscriptionDetails';
import SubscriptionEdit from './Subscription logs/SubscriptionEdit';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="head-coach-management" element={<HeadCoachManagement />} />
      <Route path="head-coach-management/:id" element={<HeadCoachManagement />} />
      <Route path="query-management" element={<QueryManagement />} />
      <Route path="query-management/:id" element={<QueryDetails />} />
      <Route path="promo-code-Management" element={<PromoCodeManagement />} />
      <Route path="subscription-logs" element={<SubscriptionLogs />} />
      <Route path="subscription-logs/subscription-plan" element={<SubscriptionPlan />} />
      <Route path="subscription-logs/subscription-plan/:id" element={<SubscriptionDetails />} />
      <Route path="subscription-logs/subscription-plan/edit/:id" element={<SubscriptionEdit />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  );
};

export default AdminRoutes;

export {
  AdminLogin,
  Dashboard,
  ForgetPassword,
  ForgetPassword2,
  ForgetPassword3,
  Notifications,
  QueryManagement,
  QueryDetails,
};
