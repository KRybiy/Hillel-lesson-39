import Button from "./components/Button"
import Counter from "./components/Counter"
import StatefulMessage from "./components/StatefulMessage"
import DisplayMessage from "./components/StatelessMessage"
import Users from "./components/Users"
import { useState } from "react"
import './index.css';

const App = () => {        // Stateful component

const [count, setCount] = useState(0)

const incrementCount = () => {
  setCount(count + 1)
}

const resetCount = () => {
  setCount(0)
}
  return (
    <div className="app">
      <StatefulMessage />
      <DisplayMessage message="I am a stateless component"/>
      <Counter count={count} />
      <Button onClick={incrementCount} text="Increment"/>
      {!!count && <Button onClick={resetCount} text="Reset"/> }  
      <h1>Users List</h1>
      <Users />
    </div>
  )
}

export default App