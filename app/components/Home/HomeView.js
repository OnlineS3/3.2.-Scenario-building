import React from 'react';
import { Link } from 'react-router';

import Header from '../Header';
import PestleAnalysis from '../Pestle';

const HomeView = ({message}) => {
  return (
    <div>
      <Header />
      <PestleAnalysis />
    </div>
  )
}

export default HomeView;
