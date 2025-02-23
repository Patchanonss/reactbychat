import "./App.css";
import Component1 from "./components/Component1.js";
import Greeting from "./components/Greeting.js";
import TestingFetch from "./components/testingFetch.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Greeting></Greeting>
        <Component1></Component1>
        <TestingFetch></TestingFetch>
      </header>
    </div>
  );
}

export default App;
