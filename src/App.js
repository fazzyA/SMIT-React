import './App.css';
import { useState } from 'react';

function App() {
  // let num = 10 // wrong way
  const [name, setName] = useState("faiza");
  const [num, setNum] = useState(10);

  const handleClick = () => {
    setNum(`${num} hiii`)
  }
console.log(num)
const obj = [
  {id: 1, name: "xyz"},
  {id:2, name: "abc"}
]
console.log(num)
  return (
    <>
    <button onClick={handleClick}>click me</button>
    <h1>{num} hello</h1>
    {obj.map((item) => (
      <>
      <h2>{item.id}</h2>
      <h3>{item.name}</h3>
      <hr />
      </>
      ))}
    </>
  );
}

export default App;
