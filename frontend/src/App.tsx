import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Register from "./pages/authentication/Register";
import AuthenticationRoutes from "./utils/AuthenticationRoutes";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AuthenticationRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
