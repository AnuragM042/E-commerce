import React, { useState } from 'react';
import MyContext from './MyContext';

const MyState = (props) => {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(12, 25, 39)';
      document.body.style.color = 'white'; // For changing text color
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'; // For changing text color
    }
  }

  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
