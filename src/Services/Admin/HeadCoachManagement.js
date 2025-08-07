import axiosInstance from '../../Config/axiosConfig.js';
import { buildFormData } from '../../Utils/Utils.jsx';
import { headCoachManagementData } from '../../Config/data.jsx';

// GET HEAD COACH LISTING
export const getHeadCoachListing = async (params) => {
  try {
    const data  = headCoachManagementData;
    // const { data } = await axiosInstance.get('/admin-api/head-coaches', {
    //   params,
    // });
    return data.detail; // Assume this returns the listing object
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// UPDATE HEAD COACH STATUS
export const updateHeadCoachStatus = async (id) => {
  try {
    console.log('Updating head coach status for ID:', id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log('Head coach status updated successfully');
    
    // Return mock success response instead of making actual API call
    return { 
      message: 'Head coach status updated successfully', 
      status: 'success' 
    };
    
    // Commented out actual API call
    // const response = await axiosInstance.post(`/admin-api/head-coaches/${id}/status`);
    // const {
    //   data: { message, status },
    // } = response;
    // return { message, status };

  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// VIEW HEAD COACH DETAILS
export const viewHeadCoach = async (id) => {
  try {
    console.log('Fetching head coach details for ID:', id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Mock data - replace with actual API call
    const mockHeadCoachData = {
      id: id,
      coach_name: 'John Doe',
      email: 'john.doe@example.com',
      school: 'ABC School',
      phone: '+1234567890',
      status: 'Active',
      subscription_title: 'Premium Plan',
      created_at: '2024-01-15',
      updated_at: '2024-01-20'
    };
    
    return mockHeadCoachData;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get(`/admin-api/head-coaches/${id}`);
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// GET ASSISTANT COACH LISTING
export const getAssistantCoachListing = async (params) => {
  try {
    console.log('Fetching assistant coach listing with params:', params);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // Mock data - replace with actual API call
    const mockAssistantCoachData = {
      detail: {
        data: [
          {
            id: 1,
            assistant_name: 'Jane Smith',
            email: 'jane.smith@example.com',
            school: 'XYZ School',
            head_coach: 'John Doe',
            status: 'Active',
            created_at: '2024-01-10'
          },
          {
            id: 2,
            assistant_name: 'Mike Johnson',
            email: 'mike.johnson@example.com',
            school: 'ABC School',
            head_coach: 'John Doe',
            status: 'Inactive',
            created_at: '2024-01-12'
          }
        ],
        total: 2,
        per_page: 10,
        current_page: 1
      }
    };
    
    return mockAssistantCoachData.detail;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get('/admin-api/assistant-coaches', {
    //   params,
    // });
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// VIEW ASSISTANT COACH DETAILS
export const viewAssistantCoach = async (id) => {
  try {
    console.log('Fetching assistant coach details for ID:', id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Mock data - replace with actual API call
    const mockAssistantCoachData = {
      id: id,
      assistant_name: 'Jane Smith',
      email: 'jane.smith@example.com',
      school: 'XYZ School',
      head_coach: 'John Doe',
      phone: '+1234567890',
      status: 'Active',
      created_at: '2024-01-10',
      updated_at: '2024-01-15'
    };
    
    return mockAssistantCoachData;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get(`/admin-api/assistant-coaches/${id}`);
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// GET TOTAL EVENTS LISTING
export const getTotalEventsListing = async (params) => {
  try {
    console.log('Fetching total events listing with params:', params);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // Mock data - replace with actual API call
    const mockEventsData = {
      detail: {
        data: [
          {
            id: 1,
            event_title: 'Basketball Tournament',
            event_type: 'Tournament',
            school: 'ABC School',
            head_coach: 'John Doe',
            start_date: '2024-02-15',
            end_date: '2024-02-20',
            status: 'Active',
            participants_count: 50
          },
          {
            id: 2,
            event_title: 'Swimming Competition',
            event_type: 'Competition',
            school: 'XYZ School',
            head_coach: 'Jane Smith',
            start_date: '2024-03-01',
            end_date: '2024-03-05',
            status: 'Upcoming',
            participants_count: 30
          }
        ],
        total: 2,
        per_page: 10,
        current_page: 1
      }
    };
    
    return mockEventsData.detail;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get('/admin-api/events', {
    //   params,
    // });
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// VIEW TOTAL EVENTS DETAILS
export const viewTotalEvents = async (id) => {
  try {
    console.log('Fetching event details for ID:', id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Mock data - replace with actual API call
    const mockEventData = {
      id: id,
      event_title: 'Basketball Tournament',
      event_type: 'Tournament',
      school: 'ABC School',
      head_coach: 'John Doe',
      start_date: '2024-02-15',
      end_date: '2024-02-20',
      status: 'Active',
      participants_count: 50,
      description: 'Annual basketball tournament for high school students',
      venue: 'ABC School Gymnasium',
      created_at: '2024-01-15',
      updated_at: '2024-01-20'
    };
    
    return mockEventData;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get(`/admin-api/events/${id}`);
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// GET SUBSCRIPTION LISTING
export const getSubscriptionListing = async (params) => {
  try {
    console.log('Fetching subscription listing with params:', params);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // Mock data - replace with actual API call
    const mockSubscriptionData = {
      detail: {
        data: [
          {
            id: 1,
            user_name: 'John Doe',
            email: 'john.doe@example.com',
            school: 'ABC School',
            subscription_title: 'Premium Plan',
            duration: '1 Year',
            status: 'Active',
            total_amount: '$299.99',
            payment_date: '2024-01-15',
            expiration: '2025-01-15'
          },
          {
            id: 2,
            user_name: 'Jane Smith',
            email: 'jane.smith@example.com',
            school: 'XYZ School',
            subscription_title: 'Basic Plan',
            duration: '6 Months',
            status: 'Active',
            total_amount: '$149.99',
            payment_date: '2024-01-10',
            expiration: '2024-07-10'
          }
        ],
        total: 2,
        per_page: 10,
        current_page: 1
      }
    };
    
    return mockSubscriptionData.detail;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get('/admin-api/subscriptions', {
    //   params,
    // });
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// GET ROSTER LISTING
export const getRosterListing = async (params) => {
  try {
    console.log('Fetching roster listing with params:', params);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // Mock data - replace with actual API call
    const mockRosterData = {
      detail: {
        data: [
          {
            id: 1,
            roster_name: 'Basketball Team A',
            school: 'ABC School',
            head_coach: 'John Doe',
            sport: 'Basketball',
            season: '2024',
            status: 'Active',
            players_count: 12,
            created_at: '2024-01-15'
          },
          {
            id: 2,
            roster_name: 'Swimming Team B',
            school: 'XYZ School',
            head_coach: 'Jane Smith',
            sport: 'Swimming',
            season: '2024',
            status: 'Active',
            players_count: 8,
            created_at: '2024-01-10'
          }
        ],
        total: 2,
        per_page: 10,
        current_page: 1
      }
    };
    
    return mockRosterData.detail;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get('/admin-api/rosters', {
    //   params,
    // });
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// ADD EVENT
export const addEvent = async (eventData) => {
  try {
    console.log('Adding new event:', eventData);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Event added successfully');
    
    // Return mock success response
    return { 
      message: 'Event added successfully', 
      status: 'success',
      data: {
        id: Math.floor(Math.random() * 1000) + 1,
        ...eventData
      }
    };
    
    // Commented out actual API call
    // const response = await axiosInstance.post('/admin-api/events', eventData);
    // return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// EDIT EVENT (GET EVENT FOR EDITING)
export const editEvent = async (id) => {
  try {
    console.log('Fetching event for editing, ID:', id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Mock data - replace with actual API call
    const mockEventData = {
      id: id,
      event_title: 'Basketball Tournament',
      event_type: 'Tournament',
      school: 'ABC School',
      head_coach: 'John Doe',
      start_date: '2024-02-15',
      end_date: '2024-02-20',
      status: 'Active',
      description: 'Annual basketball tournament for high school students',
      venue: 'ABC School Gymnasium',
      participants_count: 50
    };
    
    return mockEventData;
    
    // Commented out actual API call
    // const { data } = await axiosInstance.get(`/admin-api/events/${id}/edit`);
    // return data.detail;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};

// UPDATE EVENT
export const updateEvent = async ({ id, eventData }) => {
  try {
    console.log('Updating event:', { id, eventData });
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Event updated successfully');
    
    // Return mock success response
    return { 
      message: 'Event updated successfully', 
      status: 'success',
      data: {
        id: id,
        ...eventData
      }
    };
    
    // Commented out actual API call
    // const response = await axiosInstance.put(`/admin-api/events/${id}`, eventData);
    // return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: 'Unknown error occurred' };
  }
};



