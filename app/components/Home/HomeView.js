import React from 'react';
import { Link } from 'react-router';

const HomeView = ({message}) => {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default HomeView;
