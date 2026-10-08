
import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [inputList, setinputList] = useState('');
  const [Items, setItems] = useState([]);

  const itemsEvent = (e) => {
    setinputList(e.target.value);
  }
  
  const listOfItems = () => {
    // setItems((oldItems)=>{
    //   return [...oldItems,inputList];
    // })
    if(inputList !== ''){
      setItems([...Items, inputList]);
      setinputList('');
    }
  }

  const deleteItems = (id) =>{
     setItems((oldItems)=>{
       return oldItems.filter((arrElem,index)=>{
         return index !==id;
       })
     })
  }


  return (
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input 
          type='text' 
          value={inputList} 
          onChange={itemsEvent} 
          placeholder='Add a Items'
        />

        <button onClick={listOfItems}>+</button>

        <ol>
          {
            Items.map((itemval,index)=>{
              return (<TodoList itemval={itemval.split(';')} key={index} id={index} onSelect={deleteItems}/>);
            })
          }
        </ol>
        
      </div>
    </div>
  );
}

export default App;
