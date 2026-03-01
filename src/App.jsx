import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Bowler from './Bowler';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}
  

function App() {
  const postsPromise = fetchPosts();
  const friendPromise = fetchFriends();
  function handleClick(){
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3")
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>

      <Players></Players>

      <Suspense fallback={<h3>Loading Posts.......</h3>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Loading Data of Friends...</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <Bowler></Bowler>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick (){
        alert("Clicked 2")
      }}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("Clicked 4")}>Click Me 4</button>
      <button onClick={() => handleAdd5(10)}>Click Me 5</button>
    </>
  )
}

export default App
