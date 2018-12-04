import React, { Component } from 'react';
import { connect } from 'react-redux'
import './counter.css'


class DisplayCat extends Component {

  render() {
    return (
      <div>
      <h3>Display Cats</h3>
      <div className='images'>
        <img src={this.props.myCat}/>
        <img src={this.props.myCat}/>
        <img src={this.props.myCat}/>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myCount: state.count,
    myCat: state.Image
  }
}

export default connect(mapStateToProps)(DisplayCat)
