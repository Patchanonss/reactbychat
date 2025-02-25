import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Temp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h1>Welcome to Temp Page</h1>
      <h1>You are IN</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token"); // Logout function
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Temp;
