import React from 'react';
import styles from './Explore.module.css';
import { Outlet } from 'react-router';
import ExploreNav from '../ExploreNav/ExploreNav';

const Explore = () => {
  return (
    <div className={styles.container}>
      <ExploreNav />
      <Outlet />
    </div>
  )
}

export default Explore;

