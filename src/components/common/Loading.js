import React from 'react';
import Loader from 'react-loaders';

const Loading = () => (
  <div className="loading-wrapper">
    <Loader type="line-spin-fade-loader" active />
  </div>
);

export default Loading;
