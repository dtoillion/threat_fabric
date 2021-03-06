
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'dashboard' },
      { path: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'devices', component: () => import('pages/Devices.vue') },
      { path: 'devices/:id', component: () => import('pages/Device.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
