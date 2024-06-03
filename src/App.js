import NavBar from "./components/nav-bar/navbar";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import Home from "./screens/home/home.view";
import Members from "./screens/members/members.view";
import Profile from "./screens/profile/profile.view";
import Register from "./screens/register/register.view";
import Login from "./screens/login/login.view";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "./config/firebase";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="App">
      <BrowserRouter>
        {user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </BrowserRouter>
    </div>
  );
}

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="home" element={<Home />} />
        <Route path="members" element={<Members />} />
        <Route path="profile/:email" element={<Profile />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

function UnauthenticatedRoutes() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={location.pathname === "/login" ? null : <NavBar />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
