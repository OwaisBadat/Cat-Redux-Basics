import React from 'react';

import { connect } from 'react-redux';
import './counter.css'


function Counter(props){
  console.log('render', props)
  return (
    <div>
      <h1>I am watching you!</h1>
      <img src={props.Image}/>
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
      }

      // onSubmitClick: () => {
      //   console.log('clicking')
      //   console.log()
      //
      // }



  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter);
