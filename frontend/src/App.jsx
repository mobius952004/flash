import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile";  // We'll make this soon
import Login from "./pages/Login";      // We'll make this too

function App() {
  return (
    <BrowserRouter> {/** Enable routing in your app */}
      <Routes>       {/** Define all your routes here */}
      
        {/* Show Signup page at /signup */}
        <Route path="/signup" element={<Signup />} />

        {/* Show Profile page at /profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Show Login page at /login */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
