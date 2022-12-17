import React from 'react';
import ABCJS from 'abcjs';

class MyComponent extends React.Component {
  componentDidMount() {
    ABCJS.renderAbc('paper', 'X:1\nT:My Song\nM:4/4\nL:1/4\nK:C\nC D E F | G A B c');
  }

  render() {
    return <div id="paper"></div>;
  }
}

export default MyComponent;