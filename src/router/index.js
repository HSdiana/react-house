import React, { lazy } from 'react';

import { Redirect } from 'react-router-dom';

const HSHome = lazy(_ => import("@/pages/home"));
const HSMine = lazy(_ => import("@/pages/mine"));

const routes = [
  {
    path: "/",
    exact: true,
    hideMenu: true,
    render: () => (
      <Redirect to="/home" />
    )
  },
  {
    path: "/home",
    menuName: '首页',
    component: HSHome,
  },
  {
    path: '/mine',
    menuName: '个人中心',
    component: HSMine,
  }
];

export default routes;