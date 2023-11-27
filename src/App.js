import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:"bat", price:"30$" },
    {name:"ball", price:"5$" }
  ]
  const friends = [
    {name:"monzil", age:20},
    {name:"fahim", age:25},
    {name:"hasan", age:12},
    {name:"ibrahim", age:30}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {
          friends.map(frnd => <Friend friend={frnd}></Friend>)
        }
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <p>Player Details</p>
        <Player name="Mashrafi" ability="Bowler"></Player>
        <Player name="Shakib" ability="All-rounder"></Player>
        <Player name="Tamim" ability="Batter"></Player>
        <Player name="Mushfiq" ability="Wicket-keeper"></Player>
        <Player name="Riyad" ability="All-rounder"></Player>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h4>Count : {count}</h4>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Friend(props){
  const {name, age} = props.friend;
  console.log(name, age)
  return (
    <div>  
      <h2>{name}</h2>
      <h4>{age}</h4>
    </div>
    )
}
function  Product(props){

  return (
    <div style={{backgroundColor:"black",margin:"20px",padding:"50px"}}>
      <h4 style={{}}>Product : {props.name}</h4>
      <h5>Price : {props.price}</h5>
    </div>
  )
}

function Player(props){
  const css = {
    width: "70%",
    border: "3px solid white",
    margin: "20px"
  }
  const nameColor = {
    color:"red"
  }
  const skillColor = {
    color:"lime"
  }
  return (
  <div style={css}>  
    <h2 style={nameColor}>Name : {props.name}</h2>
    <h4 style={skillColor}>Skill : {props.ability}</h4>
  </div>
  )
}

export default App;
