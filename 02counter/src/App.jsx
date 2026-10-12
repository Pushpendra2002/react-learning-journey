import { useState, useEffect, useCallback } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
// usecallback hook is used to memoize the function so that it doesn't get recreated on every render. It returns a memoized version of the callback that only changes if one of the dependencies has changed.
  const decrementCounter = useCallback(() => {
    console.log("decrementCounter function is called");
    if (counter > 0) {
      setCounter(counter - 1);
    }
  },[counter]);



  // useEffect hook is used to perform side effects in functional components. It runs after the first render and after every update.
  useEffect(() => {
    console.log("mai render ho rha hu");
  });

  





  return (
    <>
      <h1>Hello Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </>
  );
}

export default App;
