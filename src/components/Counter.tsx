import { Component } from "react"
interface CounterPropsInterface {
  count: number
}

// const Counter = ({ count }: CounterPropsInterface) => {  // Stateless component
//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//     </div>
//   )
// }

class Counter extends Component<CounterPropsInterface> {  

  render() {
    const { count } = this.props
    return (
      <div className="counter">
        <h2>Counter: {count}</h2>
      </div>
    )
  }
}

export default Counter