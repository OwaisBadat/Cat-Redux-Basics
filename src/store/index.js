//create redux store

import { createStore } from 'redux';

import Cat from '../cat.jpg'


const initialState = {
  count: 8,
  Image: Cat
};

const reducer = (state = initialState, action) => {
  console.log('reducer running', action)

  switch(action.type){
    case 'DECREMENT':
      return Object.assign([], state, {count: state.count - 1 });
    case 'INCREMENT':
      return Object.assign([], state, { count: state.count + 1 });
    default:
      return state;
  }

}

const store = createStore(reducer);

export default store;
