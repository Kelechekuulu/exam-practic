
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [state, setSate] = useState([]);
  const [newState, setNewState] = useState();

  useEffect(()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setSate(json));
    },[]);
    async function fetchState(id){
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const responseState = await  response.json();
      setNewState(responseState);
      
    }
    useEffect(()=>{
      fetchState()
    },[]);
  
    return (
      <Use className="App">
        {state.map((el)=><Style onClick ={()=>fetchState(el.id)}>{el.username}</Style>)}
        {newState&&<Color className="color">
          <p>{newState.name}</p>
          <p>{newState.id}</p> 
          <p>{newState.email}</p> 
          <p>{newState.phone}</p> 
          </Color>}
      </Use>
    )
  }

export default App;

const Style = styled.div`
background-color: aqua;
margin-top: 5px;
border: 1px solid;
width:200px;
height:40px;
text-align:center;
`
const Color = styled.div`
background-color: red;
width: 200px;
border: 1px solid;
`
const Use = styled.div`
display:flex;
flex-direction:column;
align-items:  center;
`


