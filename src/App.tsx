import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {useAuth} from './hooks/useAuth'
import Home from "./pages/home/Home";
import Header from "./pages/partials/Header";
import Settings from "./pages/settings/Settings";

function App() {
  const {auth} = useAuth()
  return (
    <div className="w-full min-h-screen bg-black">
      <Router>
        { auth && <Header />}
        <Routes>
          <Route  path="/" element = { auth ? <Home />: <Navigate to = "/sign" />} />
          <Route path ="/sign" element = { !auth ? <Login />: <Navigate to = "/" />} />
          <Route path="/user/settings/:id" element= {auth ? <Settings />: <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
