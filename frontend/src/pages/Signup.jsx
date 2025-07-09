import { useState } from "react";
import { signupUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await signupUser(formData);
      localStorage.setItem("accessToken", accessToken);
      navigate("/Home");
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };
  const handleLoginRedirect= async ()=>{

navigate("/Login")
  }

  return (  
  <div className="max-w-md mx-auto mt-20 p-8 bg-gray-900 text-white border border-gray-700 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
  <form onSubmit={handleSubmit} className="space-y-5">
    <input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
      required
      className="w-full bg-gray-800 text-white border border-gray-600 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full bg-gray-800 text-white border border-gray-600 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
      className="w-full bg-gray-800 text-white border border-gray-600 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
    />

    {/* Submit button */}
    <button
      type="submit"
      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition duration-300"
    >
      Sign Up
    </button>

    {/* Log-in button - redirect only */}
    <button
      type="button"
      onClick={handleLoginRedirect}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition duration-300"
    >
      Log In
    </button>

    {error && (
      <p className="text-red-400 text-sm text-center">{error}</p>
    )}
  </form>
</div>


);

}
