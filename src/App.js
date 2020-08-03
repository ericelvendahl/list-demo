import React from "react";
import "./App.css";
import List from "./Components/List/List";
import List2 from "./Components/List2/List2";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <List></List> */}
        <p>A sortable list of cool things:</p>
        <p>
          <List2></List2>
        </p>
      </header>
    </div>
  );
}

export default App;
