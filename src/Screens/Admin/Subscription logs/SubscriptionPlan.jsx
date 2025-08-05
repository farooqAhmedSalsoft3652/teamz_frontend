import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineXCircle,
} from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import CustomModal from '../../../Components/CustomModal';
import CustomTable from '../../../Components/CustomTable/CustomTable';
import TableActionDropDown from '../../../Components/TableActionDropDown/TableActionDropDown';
import { showToast } from '../../../Components/Toast/Toast';
import withFilters from '../../../HOC/withFilters ';
import withModal from '../../../HOC/withModal';
import { usePageTitle } from '../../../Hooks/usePageTitle';
import { useFetchTableData } from '../../../Hooks/useTable';
import {
  getSubscriptionPlansListing,
} from '../../../Services/Admin/SubscriptionManagement';
import { statusClassMap } from '../../../Utils/Constants/SelectOptions';
import { subscriptionStatusFilters, subscriptionTypeFilters } from '../../../Utils/Constants/TableFilter';
import { subscriptionPlanHeaders } from '../../../Utils/Constants/TableHeaders';
import { formatDate, serialNum, showErrorToast } from '../../../Utils/Utils';
import BackButton from '../../../Components/BackButton';

const SubscriptionPlan = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  usePageTitle('Subscription Plan');
  const navigate = useNavigate();
  const [changeStatusModal, setChangeStatusModal] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);
  let queryClient = useQueryClient();

  //GET SUBSCRIPTION LISTING
  const {
    data: fetchedData,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchTableData(
    'subscriptionListing',
    filters,
    updatePagination,
    getSubscriptionPlansListing
  );

  // Provide a default value for `subscriptionLogs`
  const subscriptionPlans = fetchedData?.data ?? [];

  if (isError) {
    showErrorToast(error);
  }
  
  // const isStatusActive = (item) => {
  //   return item?.status_detail === 'Active';
  // };

  // //UPDATE STATUS
  // const handleStatusChange = (item) => {
  //   setSelectedObj(item);
  //   setChangeStatusModal(true);
  // };

  // // Mutation for updating status
  // const { mutate: updateStatusMutation, isPending: isStatusUpdating } =
  //   useMutation({
  //     mutationFn: async (id) => await updateSubscriptionStatus(id),
  //     onSuccess: (data) => {
  //       showToast('Subscription status updated successfully', 'success');
  //       setChangeStatusModal(false);
  //       queryClient.invalidateQueries(['subscriptionListing', filters]);
  //     },
  //     onError: (error) => {
  //       console.error('Error updating subscription status:', error);
  //     },
  //   });

  // // Confirm status change
  // const confirmStatusChange = () => {
  //   if (selectedObj) {
  //     updateStatusMutation(selectedObj.id);
  //   }
  // };

  return (
    <>
      <section className="subscription-logs">

        <div className="admin-content-header gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div className="d-flex align-items-center gap-2">
        <BackButton />
          <h2>Subscription Plan</h2>
          </div>
          <div className="d-flex align-items-center gap-2">
          <Link className="btn btn-primary text-uppercase" to="/admin/subscription-plans">
            Add Plan
          </Link>
          </div>
        </div>
        <div className="admin-content-body rounded-20 p-4 p-lg-4 p-xxl-5">
          <Row>
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                headers={subscriptionPlanHeaders}
                pagination={pagination}
                isLoading={isLoading}
                centerLastHeader={true}
                selectOptions={[
                  {
                    title: 'status',
                    options: subscriptionStatusFilters,
                  },
                  {
                    title: 'Type',
                    options: subscriptionTypeFilters,
                  },
                ]}
                dateFilters={[
                  { title: 'Payment Date', from: 'from', to: 'to' },
                  { title: 'Expire Date', from: 'from', to: 'to' },
                ]}
              >
                {(subscriptionPlans?.length || isError) && (
                  <tbody>
                    {isError && (
                      <tr>
                        <td colSpan={subscriptionPlanHeaders.length}>
                          <p className="text-danger mb-0">
                            Unable to fetch data at this time
                          </p>
                        </td>
                      </tr>
                    )}
                    {subscriptionPlans?.map((item, index) => (
                      <tr key={item.id}>
                        <td>
                          {serialNum(
                            (filters?.page - 1) * filters?.per_page + index + 1
                          )}
                        </td>
                        <td>{item?.name}</td>
                        <td>{item?.duration}</td>
                        <td>{item?.price}</td>
                        <td>{item?.status}</td>
                        <td>{formatDate(item?.created_at)}</td>
                        <td>{formatDate(item?.updated_at)}</td>
                        <td>
                        <TableActionDropDown
                            actions={[
                              {
                                name: 'View',
                                icon: HiOutlineEye,
                                onClick: () => navigate(`${item.id}`),
                                className: 'view',
                              },
                           
                              // {
                              //   name: 'View',
                              //   icon: HiOutlineEye,
                              //   onClick: () => navigate(`${item.id}`),
                              //   className: 'view',
                              // },
                              // {
                              //   name: isStatusActive(item)
                              //     ? 'Deactivate'
                              //     : 'Activate',
                              //   icon: isStatusActive(item)
                              //     ? HiOutlineXCircle
                              //     : HiOutlineCheckCircle,
                              //   onClick: () => handleStatusChange(item),
                              //   className: isStatusActive(item)
                              //     ? 'delete with-color'
                              //     : 'view with-color',
                              // },
                            ]}
                          />

                          {/* <TableActionDropDown
                            actions={[
                              {
                                name: 'View',
                                icon: HiOutlineEye,
                                onClick: () => navigate(`${item.id}`),
                                className: 'view',
                              },
                            ]}
                          /> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </CustomTable>
            </Col>
          </Row>
        </div>
      </section>

      {/* <CustomModal
        show={changeStatusModal}
        close={() => setChangeStatusModal(false)}
        disableClick={isStatusUpdating}
        action={confirmStatusChange}
        title={isStatusActive(selectedObj) ? 'Deactivate' : 'Activate'}
        description={`Are you sure you want to ${
          isStatusActive(selectedObj) ? 'deactivate' : 'activate'
        } this subscription?`}
      /> */}
    </>
  );
};

export default withModal(withFilters(SubscriptionPlan));
