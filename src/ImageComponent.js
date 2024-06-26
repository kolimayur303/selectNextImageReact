import React from 'react';
import { useSelector } from 'react-redux';

const images = [
  'https://cdn.pixabay.com/photo/2017/11/02/19/37/istanbul-2912249_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/09/17/16/35/boats-2758962_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_1280.jpg',
  'https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758_1280.jpg',
];

const ImageComponent = () => {
  const currentIndex = useSelector((state) => state.currentIndex);
  return <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />;
};

export default ImageComponent;
