import './App.css'
import Batsman from './Batsman';
import Bowler from './Bowler';
import Counter from './Counter';

function App() {
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
