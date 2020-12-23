import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from './router';

import HSAppHeader from '@/components/app-header';
import HSFooter from '@/components/app-footer';
import HSAppBody from '@/components/app-body';

export default memo(function App() {
  return (
    <BrowserRouter>
      <HSAppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <HSAppBody />
      <HSFooter />
    </BrowserRouter>
  )
})


