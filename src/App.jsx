
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'


function App() {
   
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concept</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me</button>
      <button onClick={() => {alert('third clicked')}}> third button</button>
      <button onClick={() => addToFive(10)}>fourth btn</button>
    </>
  )
}

export default App
