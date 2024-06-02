import NavBar from "./components/nav-bar/navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from './screens/home/home.view';
import Members from './screens/members/members.view';
import Profile from './screens/profile/profile.view';
import Register from './screens/register/register.view';
import Login from "./screens/login/login.view";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<NavBar />}>
            <Route path = "home" element = {<Home/>} />
            <Route path = "members" element = {<Members/>} />
            <Route path = "profile" element = {<Profile/>} />
            <Route path = "register" element = {<Register />} />
            <Route path = "*" element = {<h1>404 - Not Found</h1>} />
          </Route>
          <Route path = "/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
