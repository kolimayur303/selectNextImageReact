import React from 'react';
import { useDispatch } from 'react-redux';
import { nextImage, prevImage } from './actions';

const NavigationComponent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(prevImage())}>Back</button>
      <button onClick={() => dispatch(nextImage())}>Next</button>
    </>
  );
};

export default NavigationComponent;
