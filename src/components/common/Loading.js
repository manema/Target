import React from 'react';
import Loader from 'react-loaders';

const Loading = size => (
  <div className="loading-wrapper">
    <Loader type="line-spin-fade-loader" active color="#000" style={{ transform: `scale(${size})` }} />
  </div>
);

export default Loading;
