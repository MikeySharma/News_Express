import React from 'react';
import Loading from './loading.gif';

const Spinner = () => {

  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <img src={Loading} alt="Loading" />
    </div>
  )
}

export default Spinner;
