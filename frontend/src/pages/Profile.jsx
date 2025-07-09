// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../api/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      const  accessToken=localStorage.getItem("accessToken")
      try {
        const data = await fetchProfile(accessToken);
        setUser(data);
      } catch (err) {
        setError(err.message || "Unauthorized or failed to load profile" );
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    }

    loadProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!user) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full border border-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-center">Profile</h1>

        <div className="mb-4">
          <strong>Username:</strong> {user.username}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>
        {user.status && (
          <div className="mb-4">
            <strong>Status:</strong> {user.status}
          </div>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
