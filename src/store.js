import { createStore } from 'redux';

const initialState = {
  currentIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_IMAGE':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % 5, // 5 is the number of images
      };
    case 'PREV_IMAGE':
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + 5) % 5, // 5 is the number of images
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
