import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
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
} from '../../../Services/Admin/SubscriptionManagement';

import { formatDate, showErrorToast } from '../../../Utils/Utils';
import BackButton from '../../../Components/BackButton';

const SubscriptionDetails = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  usePageTitle('Subscription Plan');
  const { id } = useParams();
  const navigate = useNavigate();
  const [changeStatusModal, setChangeStatusModal] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);
  let queryClient = useQueryClient();

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
  const subscriptionData = fetchedData?.data ?? [];

  console.log(subscriptionData, 'subscriptionData');

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
                  <p className="fw-medium">{subscriptionData?.name}</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Duration</h5>
                  <p className="fw-medium">{subscriptionData?.duration}</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Amount</h5>
                  <p className="fw-medium">${subscriptionData?.amount}</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-4 mb-md-4 mb-xxl-5 detail-box">
                  <h5 className="mb-2">Status</h5>
                  <p className="fw-medium">{subscriptionData?.status}</p>
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
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default withModal(withFilters(SubscriptionDetails));
