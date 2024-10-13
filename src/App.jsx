import { useState } from "react";
import Navbar from "./Components/Navbar";
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className="text">{counter}</h1>
      <div className="text-center">
        <button onClick={() => setCounter(counter + 1)}>increase</button>
        <button onClick={() => setCounter(counter - 1)}>decrease</button>
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </>
  );
};

export default App;
