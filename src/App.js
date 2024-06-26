import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ImageComponent from './ImageComponent';
import NavigationComponent from './NavigationComponent';
import './style.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Image Carousel</h1>
        <div className="image-container">
          <ImageComponent />
        </div>
        <div className="navigation">
          <NavigationComponent />
        </div>
      </div>
    </Provider>
  );
};

export default App;
