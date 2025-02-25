import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Temp from "./pages/Temp.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/Temp" element={<Temp />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
