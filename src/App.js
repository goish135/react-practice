import './App.css';
import { Table, message} from 'antd';

 
const dataSource = [
  {
    key: '1',
    name: 'Peter Quill',
    codeName:'Star Loar',
    line: '',
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
    codeName:'',
    line:'I am Grrot'    
  }
];




function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const info = (columnName,record,rowIndex) => {
    const myJSON = JSON.stringify(record); 
    messageApi.info(`${columnName} ${myJSON}  ${rowIndex}`);
  }; 
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
            },
        };
      },
      render(text, record) {
        return {
          props: {
            style: { background: text ? "#ffccc7" : "#d9f7be" }
          },
          children: <div>{text}</div>
        };
      }    
    }  
    
  ];  
  return (
    <div className="App">
      <header className="App-header">
      {contextHolder}
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
      </header>
    </div>
  );
}

export default App;
