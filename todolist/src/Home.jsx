// hit 'rfce' for basic structure...
import React, { useState } from "react";
import Create from "./create";

function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h2>TODO List App</h2>
      <Create />
      {
        todos.length === 0 
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            // eslint-disable-next-line react/jsx-key
            <div>
                {todo}
            </div>
        ))
      }
    </div>
  );
}

export default Home;
