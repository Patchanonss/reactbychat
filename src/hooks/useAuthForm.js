import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthForm = (endpoint, includeName = false) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: includeName ? "" : undefined,
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    setLoading(true);

    let validationErrors = {};
    if (includeName && !formData.name)
      validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3333/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || `${endpoint} failed`);
      }

      localStorage.setItem("token", data.token);
      setMessage(
        `${
          endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
        } successful! Redirecting...`
      );

      setTimeout(() => {
        navigate("/temp");
      }, 1000);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, errors, loading, message };
};

export default useAuthForm;
