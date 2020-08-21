import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name:'Photoshop',price:'$99.99'},
    {name:'Pdf Reader',price:'$9.99'},
    {name:'HabiJabi',price:'$229.99'},
    {name:'HudaiPera',price:'$500.99'},
  ]

  const heros = ['Alomgir', 'Jashim', 'Rubel', 'BappaRaj', 'Bappi','Shuvo'];

  const friends = [
    {name:'Abul', Description:'Ablami Kre Khali'},
    {name:'Kabul', Description:'Kabli Boot Beche'},
    {name:'Mabul', Description:'Mod Beche Khali'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
     
         <Users></Users>

         <Todos></Todos>

         
            <ul>
            {
              heros.map(heros => <li>{heros}</li>)
            }
            </ul>

            <ul>
            {
              products.map(products=><li>{products.name}</li>)
            }
            </ul>

            {
              products.map(products => <Product product={products}></Product>)
            }

            {
              friends.map(friend => <Friends details={friend}></Friends>)
            }

      </header>
    </div>
  );
}
 

function Product(props) {

  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    
  }

  const {name,price} = props.product
   return (
     <div style={productStyle}>
       <h2>{name}</h2>
       <h5>{price}</h5>
       <button>Bye Now</button>
     </div>
   )
}

function Friends(props) {
  const friendsStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    
  }

  
  return (
    <div style={friendsStyle}>
      <h3>{props.details.name}</h3>
     <p>{props.details.Description}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
     <ul>
       {
         users.map(user => <li> Name: {user.name}  Phone:{user.phone}</li>)
       }
     </ul>
    </div>
  )
}

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data=> setTodos(data))
  }, [])
  return (
    <div>
     
      <h3>Total:{todos.length}</h3>
       <ul>
         {
           todos.map(todo => <li>ID:{todo.id} Title:{todo.title}</li>)
         }
       </ul>
    </div>
  )
}

export default App;


