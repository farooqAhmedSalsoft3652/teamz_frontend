import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../../../Components/Common/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import CustomSelect from '../../../Components/CustomSelect';
import BackButton from '../../../Components/BackButton';
import { usePageTitle } from '../../../Hooks/usePageTitle';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { viewSubscriptionPlan, updateSubscriptionPlan } from '../../../Services/Admin/SubscriptionManagement';
import { showToast } from '../../../Components/Toast/Toast';
import { formatDate, showErrorToast } from '../../../Utils/Utils';
import withModal from '../../../HOC/withModal';
import TextInput from '../../../Components/Common/FormElements/TextInput';

const SubscriptionEdit = ({ showModal }) => {
  usePageTitle('Edit Subscription Plan');
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // GET SUBSCRIPTION PLAN DATA
  const {
    data: subscriptionData,
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

  // UPDATE SUBSCRIPTION PLAN MUTATION
  const updateSubscriptionMutation = useMutation({
    mutationFn: updateSubscriptionPlan,
    onSuccess: (data) => {
      showModal('Plan Updated Successfully', 'Subscription plan has been updated successfully.', null, 'success');
      queryClient.invalidateQueries(['subscriptionDetails', id]);
      queryClient.invalidateQueries(['subscriptionPlansListing']);
    },
    onError: (error) => {
      console.error('Error updating subscription plan:', error);
      showToast('Failed to update subscription plan', 'error');
    },
  });

  if (isError) {
    showErrorToast(error);
  }

  const handleSubmit = (values) => {
    console.log('values', values);
    updateSubscriptionMutation.mutate({ id, formData: values });
  };

  const durationOptions = [
    { value: '1 Month', label: '1 Month' },
    { value: '3 Months', label: '3 Months' },
    { value: '6 Months', label: '6 Months' },
    { value: '1 Year', label: '1 Year' },
  ];

  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  if (isLoading) {
    return (
      <section className="subscription-logs">
        <div className="admin-content-header mb-4 d-flex gap-2">
          <BackButton />
          <h2>Edit Subscription Plan</h2>
        </div>
        <div className="admin-content-body rounded-20 p-4 p-lg-4 p-xxl-5">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="subscription-logs">
      <div className="admin-content-header mb-4 d-flex gap-2">
        <BackButton />
        <h2>Edit Subscription Plan</h2>
      </div>
      <div className="admin-content-body rounded-20 p-4 p-lg-4 p-xxl-5">
        <Row>
          <Col xs={12} md={10} lg={8} xl={6}>
            <Formik
              initialValues={{
                name: subscriptionData?.name || '',
                description: subscriptionData?.description || '',
                price: subscriptionData?.price || '',
                duration: subscriptionData?.duration || '',
                status: subscriptionData?.status || 'Active',
                features: subscriptionData?.features || [],
              }}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                isSubmitting,
              }) => (
                <Form>
                  <Row>
                    <Col xs={12} className="mb-3 mb-lg-4">
                      <TextInput
                        name="subscription_title"
                        type="text"
                        required
                        label="Subscription Title"
                        placeholder="Enter Subscription title"
                        value={values.subscription_title}
                        labelClassName={`label-padding-left`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.subscription_title && errors.subscription_title}
                      />
                    </Col>

                    <Col xs={12} className="mb-3 mb-lg-4">
                      <CustomSelect
                        name="duration"
                        label="Type"
                        required
                        options={durationOptions}
                        value={values.duration}
                        labelClassName={`label-padding-left`}
                        onChange={(value) => setFieldValue('duration', value)}
                        error={touched.duration && errors.duration}
                      />
                    </Col>

                    <Col xs={12} className="mb-3 mb-lg-4">
                    <CustomSelect
  name="duration"
  label="Duration 123"
  required
  options={durationOptions}
  value={values.duration}
  onChange={(value) => setFieldValue('duration', value)}
  error={touched.duration && errors.duration}
  touched={touched.duration}
  placeholder="Select duration"
/>
                      <CustomSelect
                        name="duration"
                        label="Duration"
                        required
                        options={durationOptions}
                        value={values.duration}
                        labelClassName={`label-padding-left`}
                        onChange={(value) => setFieldValue('duration', value)}
                        onBlur={handleBlur}
                        error={touched.duration && errors.duration}
                      />
                    </Col>

                    <Col xs={12} className="mb-3 mb-lg-4">
                      <TextInput
                        name="amount"
                        type="number"
                        required
                        label="Amount"
                        placeholder="Enter amount"
                        value={values.amount}
                        labelClassName={`label-padding-left`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.amount && errors.amount}
                      />
                    </Col>
{/* 
                    <Col xs={12} md={6} className="mb-3 mb-lg-4">
                      <CustomSelect
                        name="status"
                        label="Status"
                        required
                        options={statusOptions}
                        value={values.status}
                        onChange={(value) => setFieldValue('status', value)}
                        error={touched.status && errors.status}
                      />
                    </Col> */}


                    <Col xs={12} className="mb-3 mb-lg-4">
                      <TextInput
                        name="description"
                        type="textarea"
                        rows={5}
                        required
                        label="Description"
                        placeholder="Enter description"
                        value={values.description}
                        labelClassName={`label-padding-left`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.description && errors.description}
                      />
                    </Col>


                    <Col xs={12} className="mb-4">
                      <div className="d-flex gap-3">
                        <CustomButton
                          type="submit"
                          text="Update Plan"
                          loading={updateSubscriptionMutation.isPending}
                          className="min-width-220"
                        />
                        <CustomButton
                          type="button"
                          text="Cancel"
                          onClick={() => navigate('/admin/subscription-logs/subscription-plan')}
                          className="btn-secondary min-width-220"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withModal(SubscriptionEdit); 