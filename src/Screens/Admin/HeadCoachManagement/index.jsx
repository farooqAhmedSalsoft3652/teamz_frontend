import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineXCircle,
} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../Components/CustomTable/CustomTable';
import TableActionDropDown from '../../../Components/TableActionDropDown/TableActionDropDown';
import { showToast } from '../../../Components/Toast/Toast';
import withFilters from '../../../HOC/withFilters ';
import withModal from '../../../HOC/withModal';
import { usePageTitle } from '../../../Hooks/usePageTitle';
import { useFetchTableData } from '../../../Hooks/useTable';
import {
  getHeadCoachListing,
  updateHeadCoachStatus,
} from '../../../Services/Admin/HeadCoachManagement';
import { statusClassMap } from '../../../Utils/Constants/SelectOptions';
import { userStatus, userStatusFilters } from '../../../Utils/Constants/TableFilter';
import { headCoachHeaders } from '../../../Utils/Constants/TableHeaders';
import { formatDate, serialNum, showErrorToast } from '../../../Utils/Utils';
import CustomSelect from '../../../Components/Common/FormElements/SelectInput';
import './styles.css';


const HeadCoachManagement = ({
  showModal,
  closeModal,
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  usePageTitle('User Management');
  const navigate = useNavigate();
  let queryClient = useQueryClient();
  const [selectValue, setSelectValue] = useState({});

  //GET USERS
  const {
    data: fetchedData, // Renamed to avoid confusion with the derived `userManagement`
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchTableData(
    'headCoachListing',
    filters,
    updatePagination,
    getHeadCoachListing
  );

  // Provide a default value for `userManagement`
  const userManagement = fetchedData?.data ?? [];

  // console.log(userManagement, 'Abc');

  if (isError) {
    showErrorToast(error);
  }

  // console.log(item, 'Item');

  const isStatusActive = (item) => {
    // Simple logic based on item?.status
    const status = item?.status;
    console.log(`Item ${item.id}: status="${status}"`);
    
    // If status is 1, return true (active), if 0, return false (inactive)
    return status === 1 || status === '1';
  };

  // Initialize selectValue when userManagement changes
  useEffect(() => {
    if (userManagement.length > 0) {
      const initialValues = {};
      userManagement.forEach((item) => {
        // Simple mapping: 1 = active, 0 = inactive
        const isActive = isStatusActive(item);
        initialValues[item.id] = isActive ? '1' : '0';
        console.log(`Item ${item.id}: status=${item?.status}, isActive=${isActive}, selectValue=${isActive ? '1' : '0'}`);
      });
      setSelectValue(initialValues);
    }
  }, [userManagement]);

  //UPDATE STATUS
  const handleStatusChange = (itemId, event) => {
    const newStatus = event.target.value;
    const statusText = newStatus === '1' ? 'Active' : 'Inactive';
    
    // Update local state immediately for better UX
    setSelectValue(prev => ({
      ...prev,
      [itemId]: newStatus
    }));

    // Show confirmation modal using showModal
    const actionText = statusText === 'Active' ? 'activate' : 'deactivate';
    console.log('Showing modal for status change:', { itemId, newStatus, statusText });
    
    showModal(
      ``,
      `Are you sure you want to ${actionText} this user?`,
      () => {
        // This will be called when user confirms
        console.log('Modal confirmed, calling API for itemId:', itemId);
        updateStatusMutation(itemId);
      },
      'info'
    );
  };

  // Mutation for updating status
  const { mutate: updateStatusMutation, isPending: isStatusUpdating } =
    useMutation({
      mutationFn: async (id) => await updateHeadCoachStatus(id),
      onSuccess: (data, variables) => {
        showToast('Status updated successfully', 'success');
        // Show success modal after a short delay to avoid conflicts
        setTimeout(() => {
          const currentStatus = selectValue[variables] === '1' ? 'Active' : 'Inactive';
          showModal(
            ``,
            `User has been ${currentStatus.toLowerCase()} successfully!`,
            null,
            'success'
          );
        }, 1000); // Increased delay to ensure confirmation modal is closed
        queryClient.invalidateQueries(['headCoachListing', filters]);
      },
      onError: (error, variables) => {
        console.error('Error updating status:', error);
        showToast('Failed to update status', 'error');
        // Revert the local state change on error
        if (variables) {
          setSelectValue(prev => {
            const newState = { ...prev };
            const item = userManagement.find(item => item.id === variables);
            if (item) {
              newState[item.id] = item.status === 1 || item.status === '1' ? '1' : '0';
            }
            return newState;
          });
        }
      },
    });

  return (
    <>
      <section className="head-coach-management">
      <div className="admin-content-header mb-4 d-flex gap-2">
          <h2 className="screen-title mb-0">Head Coach Management</h2>
        </div>
        <div className="admin-content-body rounded-20 p-4 p-lg-4 p-xxl-4 mb-4">
        <Row>
          <Col xs={12}>
            <CustomTable
              filters={filters}
              setFilters={setFilters}
              headers={headCoachHeaders}
              pagination={pagination}
              isLoading={isLoading}
              centerLastHeader={true}
              selectOptions={[
                {
                  title: 'status',
                  options: userStatusFilters,
                },
              ]}
              dateFilters={[
                { title: 'Registration Date', from: 'from', to: 'to' },
              ]}
            >
              {(userManagement?.length || isError) && (
                <tbody>
                  {isError && (
                    <tr>
                      <td colSpan={headCoachHeaders.length}>
                        <p className="text-danger mb-0">
                          Unable to fetch data at this time
                        </p>
                      </td>
                    </tr>
                  )}
                  {userManagement?.map((item, index) => (
                    <tr key={item.id}>
                      <td>
                        {serialNum(
                          (filters?.page - 1) * filters?.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.coach_name}</td>
                      <td>{item?.school}</td>
                      <td>{item?.email}</td>
                      <td>
                        <CustomSelect
                          options={userStatus}
                          value={selectValue[item.id]}
                          className={`status-select ${selectValue[item.id] === '1' ? 'status-active' : 'status-inactive'}`}
                          onChange={(event) => handleStatusChange(item.id, event)}
                        />
                      </td>
                      <td>{item?.subscription_title}</td>
                      <td>{formatDate(item?.created_at)}</td>
                      <td>
                        <TableActionDropDown
                          actions={[
                            {
                              name: 'View',
                              icon: HiOutlineEye,
                              onClick: () => navigate(`${item.id}`),
                              className: 'view',
                            },
                          ]}
                        />
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

    </>

// <div>
    //   <div className="d-flex align-items-start mb-4 justify-content-between flex-wrap">
    //     <div className="d-flex flex-column gap-2">

    //       <h2 className="screen-title m-0 d-inline">View Details</h2>
    //     </div>
    //   </div>
    //   <div className="d-card py-45 mb-45">
    //     <div className="d-flex justify-content-between flex-wrap-reverse">
    //       <div>
    //         <p className="text-label">Business ID</p>
    //         <p className="text-data">{user?.id}</p>
    //       </div>
    //       <div className="d-flex flex-column align-items-center gap-1 ms-auto mb-3 mb-md-0">
    //         <p className="text-label">
    //           Status:{' '}
    //           <span
    //             className={`status ${statusClassMap[user?.status_detail]}`} // change with user status
    //           >
    //             {user?.status_detail}
    //           </span>
    //         </p>
    //         <CustomButton
    //           onClick={() => setChangeStatusModal(true)}
    //           text={
    //             user?.status_detail === 'Active' ? 'Deactivate' : 'Activate'
    //           }
    //         />
    //       </div>
    //     </div>
    //     <div className="d-flex gap-3 mt-3 detailsWrapper">
    //       <div className="detailItem">
    //         <p className="text-label">Business Name</p>
    //         <p className="text-data">{user?.business_name}</p>
    //       </div>
    //       <div className="detailItem">
    //         <p className="text-label">Contact Person</p>
    //         <p className="text-data">{user?.user_name}</p>
    //       </div>
    //       <div className="detailItem">
    //         <p className="text-label">User ID</p>
    //         <p className="text-data">{user?.user_id}</p>
    //       </div>
    //       <div className="detailItem">
    //         <p className="text-label">Phone No.</p>
    //         <p className="text-data">{user?.phone_number}</p>
    //       </div>
    //       <div className="detailItem">
    //         <p className="text-label">Email Address</p>
    //         <p className="text-data">{user?.email}</p>
    //       </div>
    //       <div className="detailItem">
    //         <p className="text-label">Reg. Date</p>
    //         <p className="text-data">{formatDate(user?.created_at)}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <h2 className="screen-title">Branch Logs</h2>
    //   <Row>
    //     <Col xs={12}>
    //       <CustomTable
    //         hasFilters={false}
    //         isPaginated={false}
    //         headers={branchLogHeaders}
    //       >
    //         <tbody>
    //           {branchLogs?.map((item, index) => (
    //             <tr key={item.id}>
    //               <td>{item.id}</td>
    //               <td>{item.name}</td>
    //               <td>{item.address}</td>
    //               <td>{item?.manager?.user_name}</td>
    //               <td>{item?.supervisor?.user_name}</td>
    //               <td>{item?.currency?.currency}</td>
    //               <td>
    //                 <StatusChip status={item.status} />
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </CustomTable>
    //     </Col>
    //   </Row>
    //   <CustomModal
    //     show={changeStatusModal}
    //     close={() => setChangeStatusModal(false)}
    //     action={handleStatusChange}
    //     disableClick={isStatusUpdating}
    //     title={user?.status_detail === 'Active' ? 'Deactivate' : 'Activate'}
    //     description={`Are you sure you want to ${
    //       user?.status_detail === 'Active' ? 'deactivate' : 'activate'
    //     } this user?`}
    //   />
    // </div>

    
  );
};

export default withModal(withFilters(HeadCoachManagement));
