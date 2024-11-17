import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const handelClick = () => {
    setcount(count + 1);
  };

  return (
    <>
      <div>
        <button onClick={handelClick}>Count</button>
      </div>

      <div>{count}</div>
    </>
  );
}

export default App;
