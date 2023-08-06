import React, { useState } from 'react';
import { Table } from 'antd';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState([]);
  const [columnsFromChild, setColumnsFromChild] = useState([]);

  // This function will be passed to the child component as a prop
  const handleChildData = (dataSource, columns) => {
    setDataFromChild(dataSource);
    setColumnsFromChild(columns);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onDataReceived={handleChildData} />
      {dataFromChild.length > 0 && (
        <div>
          <h2>Data from Child</h2>
          <Table dataSource={dataFromChild} columns={columnsFromChild} />
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
