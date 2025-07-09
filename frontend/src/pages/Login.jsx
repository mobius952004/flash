import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [fadeIn, setFadeIn] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { accessToken } = await loginUser(formData);
            localStorage.setItem("accessToken", accessToken);
            navigate("/profile");
        } catch (err) {
            setError(err.message || "Login failed");
        }
    };
    useEffect(() => {
        // Trigger fade-in animation once component mounts
        setFadeIn(true);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={`bg-gray-900 p-10 rounded-xl shadow-lg w-full max-w-md border border-gray-700 transform transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"
                    }`}
            >
                <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">
                    Log In
                </h2>

                {error && (
                    <div className="text-red-400 text-sm mb-6 text-center font-medium">
                        {error}
                    </div>
                )}

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                <div className="mb-8 relative">
                    <label className="block text-sm font-semibold mb-2">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[52%] transform -translate-y-1/2 text-sm text-blue-400 hover:underline focus:outline-none"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-sm"
                >
                    Log In
                </button>
            </form>
        </div>
    );
}
