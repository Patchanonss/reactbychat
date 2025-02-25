import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthForm from "../hooks/useAuthForm"; // Import hook
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, errors, loading, message } =
    useAuthForm("signup", true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/temp");
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
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
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
