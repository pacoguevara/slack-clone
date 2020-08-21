import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* react touter -> chat screen */}
    </div>
  );
}

export default App;
