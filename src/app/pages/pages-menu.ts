import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Upload Resume',
    icon: 'upload-outline',
    link: '/pages/drag-drop',
    home: true,
  },
  {
    title: 'Extract',
    icon: 'grid-outline',
    link: '/pages/tables',
  },
  {
    title: 'View & Edit',
    icon: 'edit-2-outline',
    //link: '/pages/editors',
    link: '/pages/students-list',
    home: true,
  },
  // {
  //   title: 'Configure tags',
  //   icon: 'settings-outline',
  //   link: '/pages/configure',
  //   home: true,
  // },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
