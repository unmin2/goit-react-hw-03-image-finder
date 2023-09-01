import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => (
  <div className="spinner">
    <BallTriangle color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;