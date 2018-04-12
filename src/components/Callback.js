import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div>
        <i className='fa fa-cog fa-spin fa-3x fa-fw' />
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }
}

export default Spinner;