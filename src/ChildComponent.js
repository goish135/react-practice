import React, { useState } from 'react';

const ChildComponent = ({ onDataReceived }) => {
  const [data, setData] = useState('');

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  const sendDataToParent = () => {
    // Call the callback function passed from the parent with the data
    onDataReceived(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={data} onChange={handleInputChange} />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;