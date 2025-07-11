import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile";  
import Login from "./pages/Login";      

function App() {
  return (
    <BrowserRouter> 
      <Routes>       
      
  
        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

      
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
