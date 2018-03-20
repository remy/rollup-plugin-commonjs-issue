import React from 'react';

export default class B extends React.Component {
  onClick = () => {
    alert('clicked');
  };

  render() {
    return <p onClick={this.onClick}>Hi</p>;
  }
}
