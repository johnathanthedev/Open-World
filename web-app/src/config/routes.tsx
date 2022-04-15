import Homepage from '../components/Homepage/Homepage';
import UserHomepage from '../components/UserHomepage/UserHomepage';

export const publicRoutes = [
  {
    path: '/',
    component: <Homepage />,
  },
];

export const privateRoutes = [
  {
    path: '/home',
    component: <UserHomepage />,
  },
];
