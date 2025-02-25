import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home.js";

const Temp = () => {
  return (
    <div>
      <h1>Temp Page</h1>
      <p>This is a static homepage.</p>
      {/* Navigation Links */}
      <nav>
        <Link to="/Home">Home</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Temp;
