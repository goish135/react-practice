import './App.css';
import { Table, message} from 'antd';
import { useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';
 
const dataSourceInitial = [
  {
    key: '1',
    name: 'Peter Quill',
    codeName:'Star Loar',
    line: 'See more',
  },
  {
    key: '2',
    name: 'Gamora',
    codeName:'',
    line: ''
  },
  {
    key: '3',
    name: 'Drax',
    codeName:'',
    line:''
  },
  {
    key: '4',
    name: 'Rocket',
    codeName:'Raccoon',
    line:''
  },
  {
    key: '5',
    name: 'Groot',
    codeName:'Groot',
    line:'See more'    
  }
];

const StarLoarSays = [
  {
    key: '1',
    row: '1',
    line: 'Come and Get Your Love'
  },
  {
    key: '2',
    row: '2',
    line: 'Creep'    
  },
  {
    key: '3',
    row: '3',
    line: 'In The Meantime'    
  }  
]

const GrootSays = [
  {
    key: '1',
    row: '1',
    line: 'I am Groot'
  },
  {
    key: '2',
    row: '2',
    line: 'We are Groot'    
  }
]




function App() {
  const [dataFromChild, setDataFromChild] = useState('');
  const handleChildData = (data) => {
    setDataFromChild(data);
  };  
  const [messageApi, contextHolder] = message.useMessage();
  const info = (columnName,record,rowIndex) => {
    const myJSON = JSON.stringify(record); 
    messageApi.info(`${columnName} ${myJSON}  ${rowIndex}`);
  };
  const [dataSource, setDataSource] = useState([]);
  useEffect(()=>{
    const data = dataSourceInitial;
    setDataSource(data);
  },[])  
  const [detailDataSource, setDetailDataSource] = useState([]);

  const [selectedId, setSelectedId] = useState(-1)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, 
    {
      title: 'Code name',
      dataIndex: 'codeName',
      key:'codeName'
    },
    {
      title: 'Lines',
      dataIndex: 'line',
      key: 'line',
      onCell: (record, rowIndex) => {
        return {
            onClick: (event) => {
                console.log('Column: Lines', record, rowIndex);
                info('Column: Lines', record, rowIndex);
                setSelectedId(rowIndex);
                if(record.codeName==='Star Loar'){
                  setDetailDataSource(StarLoarSays);
                }else if(record.codeName==='Groot'){
                  setDetailDataSource(GrootSays);
                }else{
                  setDetailDataSource([]);
                }
                
            }                    
        };
      },
      render(text, record,rowIndex) {
        return {
          props: {
            style: { background: selectedId === rowIndex ? "yellow": text==='See more' ? "#ffccc7" : "#d9f7be" }
          },
          children: <div><u>{text}</u></div>
        };
      }    
    }  
    
  ];
  const detailColumns = [
    {
      title: 'Row #1',
      dataIndex: 'row',
      key: 'row',
    },
    {
      title: 'Line',
      dataIndex: 'line',
      key: 'line'
    } 
  ]  
  return (
    <div className="App">
      <header className="App-header">
      {contextHolder}
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
        <br/>
        <Table dataSource={detailDataSource} columns={detailColumns} pagination={false}/>
        {dataFromChild && <p>Data from child: {dataFromChild}</p>}

        <ChildComponent onDataReceived={handleChildData} />

        <br/>
        
      </header>
    </div>
  );
}

export default App;
