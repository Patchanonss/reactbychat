import { useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import useAuthForm from "../hooks/useAuthForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, errors, loading, message } =
    useAuthForm("login");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, redirect to /temp
      navigate("/temp");
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          {errors.general && <p className="error-text">{errors.general}</p>}
          {message && <p className="success-text">{message}</p>}
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Logging up..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
