import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineXCircle,
} from 'react-icons/hi2';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomModal from '../../../Components/CustomModal';
import CustomTable from '../../../Components/CustomTable/CustomTable';
import TableActionDropDown from '../../../Components/TableActionDropDown/TableActionDropDown';
import { showToast } from '../../../Components/Toast/Toast';
import withFilters from '../../../HOC/withFilters ';
import withModal from '../../../HOC/withModal';
import { usePageTitle } from '../../../Hooks/usePageTitle';
import { useFetchTableData } from '../../../Hooks/useTable';
import {
  viewSubscriptionPlan,
  updateSubscriptionPlanStatus,
} from '../../../Services/Admin/SubscriptionManagement';

import { formatDate, replaceUnderscoreWithSpace, showErrorToast } from '../../../Utils/Utils';
import BackButton from '../../../Components/BackButton';
import SelectInput from '../../../Components/Common/FormElements/SelectInput';
import { userStatus } from '../../../Utils/Constants/TableFilter';

const SubscriptionDetails = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
}) => {
  usePageTitle('Subscription Plan');
  const { id } = useParams();
  const navigate = useNavigate();
  const [changeStatusModal, setChangeStatusModal] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);
  let queryClient = useQueryClient();
  const [selectedStatus, setSelectedStatus] = useState('');

  //GET SUBSCRIPTION DATA
  const {
    data: fetchedData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['subscriptionDetails', id],
    queryFn: () => viewSubscriptionPlan(id),
    onError: (error) => {
      console.error("Error fetching subscription details:", error.message);
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  if (isError) {
    showErrorToast(error);
  }
  const subscriptionData = fetchedData ?? {};

  console.log(subscriptionData, 'subscriptionData');

  // initialize local select from fetched status (maps 1/"1" to "1", 0/"0" to "0")
  useEffect(() => {
    if (subscriptionData && subscriptionData.status !== undefined) {
      setSelectedStatus((prev) => {
        if (prev === '' || prev === null || prev === undefined) {
          return subscriptionData.status === 1 ? '1' : String(subscriptionData.status);
        }
        return prev;
      });
    }
  }, [subscriptionData]);

  // Mutation for updating status
  const { mutate: updateStatusMutation, isPending: isStatusUpdating } =
    useMutation({
      mutationFn: async (planId) => await updateSubscriptionPlanStatus(planId),
      onSuccess: () => {
        showToast('Status updated successfully', 'success');
        queryClient.invalidateQueries(['subscriptionDetails', id]);
        queryClient.invalidateQueries(['subscriptionListing']);
      },
      onError: () => {
        showToast('Failed to update status', 'error');
        setSelectedStatus((prev) => (prev === '1' ? '0' : '1'));
      },
    });

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    const actionText = newStatus === '1' ? 'activate' : 'deactivate';
    showModal(
      ``,
      `Are you sure you want to ${actionText} this plan?`,
      () => updateStatusMutation(subscriptionData.id),
      'info'
    );
  };

  return (
    <>
      <section className="subscription-logs">
        <div className="admin-content-header mb-4 d-flex gap-2">
          <BackButton />
          <h2>View Plan</h2>
        </div>
        <div className="admin-content-body rounded-20 p-4 p-lg-4 p-xxl-5">
          <Row>
            <Col xs={12} md={9} lg={8} xxl={7}>
              <Row>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Subscription Title</h5>
                  <p className="fw-medium">{subscriptionData?.subscription_title}</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Duration</h5>
                  <p className="fw-medium">{replaceUnderscoreWithSpace(subscriptionData?.duration)}</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Amount</h5>
                  <p className="fw-medium">${subscriptionData?.amount}</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Type</h5>
                  <p className="fw-medium">{replaceUnderscoreWithSpace(subscriptionData?.type)}</p>
                </Col>
                <Col xs={12} xxl={9} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Description</h5>
                  <p className="fw-medium">{subscriptionData?.description}</p>
                </Col>
                <Col xs={12} md={12} lg={12}>
                <Link 
                  to={`/admin/subscription-logs/subscription-plan/edit/${id}`}      
                  className="btn btn-primary text-uppercase"
                >
                  Edit
                </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3} lg={4} xxl={5}>
              <div className="d-flex justify-content-end">
                <SelectInput
                  options={userStatus}
                  value={selectedStatus}
                  className={`status-select ${selectedStatus === '1' ? 'status-active' : 'status-inactive'}`}
                  onChange={handleStatusChange}
                  disabled={isStatusUpdating}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default withModal(withFilters(SubscriptionDetails));
