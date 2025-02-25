// Home.js
import { Link } from "react-router-dom";
import Component1 from "../components/Component1";

const Home = () => {
  return (
    <div>
      <Component1 />
      <nav>
        <Link to="/Temp">Temp</Link>
      </nav>
      <h1>This is a Home Page</h1>
      {/* <Link to="/getposts">
        <button>View Posts</button>
      </Link> */}
    </div>
  );
};

export default Home;
