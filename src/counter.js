import React from 'react';

import { connect } from 'react-redux';
import './counter.css'
import Cat from './cat.jpg'


function Counter(props){
  console.log('render', props)
  return (
    <div>
      <h1>I am watching you!</h1>
      <button onClick={props.addCatClick}><img src={props.Image}/></button>
    </div>
  )
}


function mapStateToProps(state){
  console.log('mapStateToProps', state);
  return {
    count: state.count,
    Image: state.Image
  }
}

function mapDispatchToProps(dispatch){


  return {
      onDecrementClick: () => {
        console.log('clicking')
        const action= { type: 'DECREMENT' };
        dispatch(action)
      },

      onIncrementClick: () => {
        console.log('clicking')
        const action= { type: 'INCREMENT' };
        dispatch(action)
      },

      addCatClick: () => {
        console.log("clicked")
        const action= { type: 'ADDCAT', value: Cat };
        dispatch(action)
      }

  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter);
