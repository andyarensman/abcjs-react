import React, { useState } from 'react';
import ABCJS from 'abcjs';

const MyComponentTwo = () => {
  const [notes, setNotes] = useState('X:1\nM:4/4\nL:1/4\nK:C\nC D E F |]');

  const renderSheetMusic = () => {
    ABCJS.renderAbc('paper', notes, { scale: 1.5 });
  }

  React.useEffect(() => {
    renderSheetMusic();
  });

  return (<div id="paper"></div>);
}



export default MyComponentTwo;