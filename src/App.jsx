import './App.css';
import Form from './Form';
import { useState, useEffect } from 'react';
import Datalist from './Datalist';
               

function App() {

  const Url_Api = 'https://jsonplaceholder.typicode.com';
  const [reqType, SetReqType] = useState('users');
  const [items, SetItems] = useState([]);

useEffect(() =>{
  const dataFetch = async () =>{
    try{

      const response = await fetch(`${Url_Api}/${reqType}`);
      const data = await response.json();
      SetItems(data);
    } catch(err){
      console.log(err);

    }
  }
  dataFetch();

},[reqType])
  return (
    <div className="App">

      <Form 
        reqType = {reqType}
        SetReqType = {SetReqType}
      />

      <Datalist items={items}
       
      />
     
    </div>
  );
}

export default App;
