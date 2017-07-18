import React from 'react';
import { Link } from 'react-router';

import Header from '../Header';
import Table from '../Table';
import ImpactGraph from '../ImpactGraph';

const HomeView = ({message}) => {
  return (
    <div>
      <Header />
      <Table />
    </div>
  )
}

export default HomeView;
