import React from 'react';

const ChildComponent = ({ onDataReceived }) => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // Call the callback function provided by the parent with the data source and columns
  const sendDataToParent = () => {
    onDataReceived(dataSource, columns);
  };

  return (
    <div>
      <h2>Child Component</h2>
      {/* Add your child component UI here */}
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
