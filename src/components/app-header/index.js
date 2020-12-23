import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import routes from '@/router';

import styles from './index.module.less';

export default memo(function HSAppHeader() {

  return (
    <div className={styles.content}>
      {
        routes && routes.map(item => {
          if (item.hideMenu) {
            return null
          } else {
            return <NavLink key={item.path} exact to={item.path} activeClassName="link_active">{item.menuName}</NavLink>
          }
        })
      }
    </div>
  )
})
