import { images } from '../assets/';
// import Stats1 from '../Assets/images/svg/totalEarning.svg?react';
// import Stats2 from '../Assets/images/svg/newBookings.svg?react';
// import Stats3 from '../Assets/images/svg/newUsers.svg?react';
// import Stats4 from '../Assets/images/svg/newConsultant.svg?react';

// import { category } from './TableStatus';

export const notificationsData = {
  status: true,
  message: 'user notifications',
  detail: {
    notifications: {
      current_page: 1,
      data: [
        {
          id: '2fb2b0ba-4859-47c4-826c-1742a8ac39db',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Restaurant Olympia Gilbert has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 77,
              },
            },
          },
          read_at: '2024-06-14T10:42:45.000000Z',
          created_at: '2024-06-14T10:42:45.000000Z',
          updated_at: '2024-06-14T10:42:45.000000Z',
        },
        {
          id: '31d6a0f8-d820-4afd-a1c7-e64abaf8796a',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Branch Charles has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 74,
              },
            },
          },
          read_at: null,
          created_at: '2024-06-06T12:03:40.000000Z',
          updated_at: '2024-06-06T12:03:40.000000Z',
        },
        {
          id: '3e380bad-85bf-411a-ab5a-ed3977bf179c',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Restaurant Britanney Mcbride has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 71,
              },
            },
          },
          read_at: '2024-06-14T10:42:45.000000Z',
          created_at: '2024-05-30T13:20:22.000000Z',
          updated_at: '2024-05-30T13:20:22.000000Z',
        },
        {
          id: '6169abb9-24cb-4f47-9bb4-74bc886dfa5a',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Branch Charles has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 78,
              },
            },
          },
          read_at: '2024-06-14T10:42:45.000000Z',
          created_at: '2024-06-25T11:16:18.000000Z',
          updated_at: '2024-06-25T11:16:18.000000Z',
        },
        {
          id: '704674e3-84c6-4de4-878e-5f6a53a1c16a',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Restaurant Kiona Phelps has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 72,
              },
            },
          },
          read_at: null,
          created_at: '2024-05-30T13:21:05.000000Z',
          updated_at: '2024-05-30T13:21:05.000000Z',
        },
        {
          id: '7b4774e0-0326-4481-8a33-044c1c047810',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'User Charles has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 81,
              },
            },
          },
          read_at: null,
          created_at: '2024-06-25T11:17:25.000000Z',
          updated_at: '2024-06-25T11:17:25.000000Z',
        },
        {
          id: '91740da1-89df-407b-a2c0-042ed28a1468',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Branch Peter Browning has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 83,
              },
            },
          },
          read_at: null,
          created_at: '2024-06-26T11:22:54.000000Z',
          updated_at: '2024-06-26T11:22:54.000000Z',
        },
        {
          id: '9ff7d276-caa5-475d-845a-4d0359d0e91d',
          type: 'App\\Core\\Notifications\\PushNotification',
          notifiable_type: 'App\\Models\\Admin',
          notifiable_id: 1,
          data: {
            title: 'New Feedback',
            body: 'Restaurant Carissa Berg has submitted a Feedback',
            route: {
              name: 'admin.feedbacks.show',
              params: {
                id: 69,
              },
            },
          },
          read_at: null,
          created_at: '2024-05-30T11:21:32.000000Z',
          updated_at: '2024-05-30T11:21:32.000000Z',
        },
      ],
      first_page_url:
        'http://localhost/food_app/admin-api/notifications?page=1',
      from: 1,
      last_page: 2,
      last_page_url: 'http://localhost/food_app/admin-api/notifications?page=2',
      links: [
        {
          url: null,
          label: '&laquo; Previous',
          active: false,
        },
        {
          url: 'http://localhost/food_app/admin-api/notifications?page=1',
          label: '1',
          active: true,
        },
        {
          url: 'http://localhost/food_app/admin-api/notifications?page=2',
          label: '2',
          active: false,
        },
        {
          url: 'http://localhost/food_app/admin-api/notifications?page=2',
          label: 'Next &raquo;',
          active: false,
        },
      ],
      next_page_url: 'http://localhost/food_app/admin-api/notifications?page=2',
      path: 'http://localhost/food_app/admin-api/notifications',
      per_page: 10,
      prev_page_url: null,
      to: 10,
      total: 14,
    },
    total_notifications: 0,
  },
};

export const sidebar = [
  {
    id: 1,
    name: 'Abc',
    time: 'Today',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://media.istockphoto.com/id/186555801/photo/hes-the-bright-star-in-his-classroom.webp?b=1&s=612x612&w=0&k=20&c=VnxaoyQXcotPV_qTDbP06i7h8Kt2K-BCizq7_LIqGew=',
    isOpen: true,
    delivered: false,
  },
  {
    id: 1,
    name: 'Abc',
    time: '3 Days Ago',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: 'Abc',
    time: '3 Days Ago',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg',
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: 'Abc',
    time: 'Today',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path': 'https://submeter.me/images/temp/400x450/img5.jpg',
    isOpen: true,
    delivered: false,
  },
  {
    id: 1,
    name: 'Abc',
    time: '3 Days Ago',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://media.istockphoto.com/id/1333838172/photo/indoor-headshot-portrait-of-cheerful-young-indian-female-businesswoman-student.jpg?s=612x612&w=0&k=20&c=GGPz0QlmMKYEt497R4HNRC8Pacha-lwpSe1fiqRwcjI=',
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: 'Abc',
    time: '3 Days Ago',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://www.befunky.com/images/wp/wp-2022-12-social-media-profile-picture-2.jpg?auto=avif,webp&format=jpg&width=944',
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: 'Abc',
    time: 'Today',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY=',
    isOpen: true,
    delivered: false,
  },
  {
    id: 1,
    name: 'Abc',
    time: '3 Days Ago',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=',
    isOpen: false,
    delivered: true,
  },
  {
    id: 1,
    name: 'Abc',
    time: '3 Days Ago',
    message: 'Lorem ipsum dolor sit amet...',
    notification: '01',
    'photo-path':
      'https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?s=612x612&w=0&k=20&c=cbjgWR58DgUUETP6a0kpeiKTCxwJydyvXZXPeNTEOxg=',
    isOpen: false,
    delivered: true,
  },
];
export const dashboardChartDataOne = {
  heading: 'Total Earning',
  label: 'Total Earning',
  fill: true,
  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const dashboardChartDataTwo = {
  heading: 'New Bookings Received',
  label: 'New Bookings Received',
  fill: true,
  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const dashboardChartDataThree = {
  heading: 'New Users Registered',
  label: 'New Users Registered',
  fill: true,
  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const dashboardChartDatafour = {
  heading: 'New Consultant Registered',
  label: 'New Consultant Registered',
  fill: true,

  data: [10, 30, 20, 40, 50, 60, 20, 80, 90, 50, 40, 120],
};
export const userDetail = {
  status: true,
  message: 'user data',
  detail: {
    id: 7,
    first_name: 'john',
    last_name: 'Admin',
    email: 'admin@gmail.com',
    phone: '+1561555768',
    status: 1,
    created_at: '2024-05-27T11:50:43.000000Z',
    updated_at: '2024-06-14T07:47:49.000000Z',
    deleted_at: null,
    status_detail: 'Active',
    role: 'admin',
    file: {
      id: 1425,
      fileable_type: 'AppModelsBranch',
      fileable_id: 7,
      path: 'tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png',
      file_url:
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg',
    },
  },
};
export const statsData = [
  {
    id: 1,
    // image: Stats1,
    number: '178',
    text: 'total earning',
    change: '33',
    increase: false,
    arrowIcon: true,
    total_post: 'Since last week',
    backgroundColor: '#ECE7F1',
  },
  {
    id: 2,
    // image: Stats2,
    increase: true,
    arrowIcon: true,
    number: '20',
    text: 'new  bookings',
    change: '33',
    total_post: 'Since last week',
    backgroundColor: '#E8F3F0',
  },
  {
    id: 3,
    // image: Stats3,
    number: '20',
    text: 'new  users',
    change: '33',
    increase: true,
    arrowIcon: true,
    total_post: 'Since last week',
    backgroundColor: '#E2F1FB',
  },
  {
    id: 4,
    // image: Stats4,
    number: '20',
    increase: false,
    arrowIcon: true,
    text: 'new  service provider',
    change: '33',
    total_post: 'Since last week',
    backgroundColor: '#FFF7CF',
  },
];
export const userManagementData = {
  status: true,
  message: 'user listing',
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        user_name: 'Toms',
        email: 'darvesh@gmail.com',
        status: 1,
        created_at: '2024-06-25T14:29:37.000000Z',
        type: 'Student',
        subject: 'Inquiry about Customized Fitness Training Plans',
        message:
          'I hope this message finds you well. I am interested in improving my fitness levels and would like to inquire about the personalized fitness training plans you offer. Specifically, I am looking for guidance in the following areas',
      },
      {
        id: 2,
        user_name: 'Toms',
        email: 'darvesh@gmail.com',
        status: 0,
        created_at: '2024-06-25T14:29:37.000000Z',
        type: 'Assistant Coach',
        subject: 'Inquiry about Customized Fitness Training Plans',
        message:
          'I hope this message finds you well. I am interested in improving my fitness levels and would like to inquire about the personalized fitness training plans you offer. Specifically, I am looking for guidance in the following areas',
      },
      {
        id: 2,
        user_name: 'Toms',
        email: 'darvesh@gmail.com',
        phone: '03656558478',
        status: 0,
        created_at: '2024-06-25T14:29:37.000000Z',
        type: 'Coach',
        subject: 'Inquiry about Customized Fitness Training Plans',
        message:
          'I hope this message finds you well. I am interested in improving my fitness levels and would like to inquire about the personalized fitness training plans you offer. Specifically, I am looking for guidance in the following areas',
      },
    ],
    first_page_url: 'http://localhost/food_app/admin-api/branches?page=1',
    from: 1,
    last_page: 2,
    last_page_url: 'http://localhost/food_app/admin-api/branches?page=2',
    links: [
      {
        url: null,
        label: '&laquo; Previous',
        active: false,
      },
      {
        url: 'http://localhost/food_app/admin-api/branches?page=1',
        label: '1',
        active: true,
      },
      {
        url: 'http://localhost/food_app/admin-api/branches?page=2',
        label: '2',
        active: false,
      },
      {
        url: 'http://localhost/food_app/admin-api/branches?page=2',
        label: 'Next &raquo;',
        active: false,
      },
    ],
    next_page_url: 'http://localhost/food_app/admin-api/branches?page=2',
    path: 'http://localhost/food_app/admin-api/branches',
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const promoManagementData = {
  status: true,
  message: "Appointment logs",
  detail: {
    current_page: 1,
    data: [
      {
        id: "1",
        promo_name: "Promo Abc 123",
        promo_discount: "05",
        date: "2024-06-25T14:29:37.000000Z",
      },
      {
        id: "2",
        promo_name: "Promo Abc",
        promo_discount: "10",
        date: "2024-06-25T14:29:37.000000Z",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};