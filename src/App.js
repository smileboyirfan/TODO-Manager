import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './Data/tabs';

function App() {
  let[todolist,setTodolist] = useState([])
  let[activeTabs,setactiveTabs] = useState(0)
  let[activeContent,setactiveContent] = useState(tabs[0])

  let changeData = (index) =>{
    setactiveTabs(index)
    setactiveContent(tabs[index])

  }

  
  let saveToDoList=(event)=>{
    
    let toname = event.target.toname.value;
    if(!todolist.includes(toname)){
        let finalDolist=[...todolist,toname]
        setTodolist(finalDolist)
    }
    else{
      alert("already")
    } 
    event.preventDefault(); 
  }

  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })

  return (
    <div className="App">
      <div className='tebsOuter'>
      <h1 style={{textAlign:'left'}}> Law prep Vision Mission and Value</h1>
      <ul>
        {tabs.map((tabsItems,index)=>{
          return(
            <li>
            <button onClick={()=>changeData(index)} className={activeTabs==index ? 'activebutton' : ''}>{tabsItems.title}</button>
          </li>
          )
        })}  
      </ul>
      {activeContent!==undefined ?<p>{activeContent.discription} </p> :''}
      
      
        


      </div>
      <h1>ToDo List</h1> 
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/><button>Save</button>
      </form>
     
     <div className='outerDiv'>
      <ul>
         {list}
      </ul>
      </div>
    </div> 
  );
} 
export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}>
      {indexNumber + 1} {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}