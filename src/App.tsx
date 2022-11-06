import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/home/Home";
import Header from "./pages/partials/Header";
import Settings from "./pages/settings/Settings";
import Menagement from "./pages/admin/Menagement";
import Deals from "./pages/deals/Deals";
import Order from "./pages/order/Order";
import Category from "./pages/category/Category";

const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
function App() {
  const { auth } = useAuth();
  return (
    <div className="w-full min-h-screen bg-black">
      <Router>
        {auth && <Header />}
        <Routes>
          <Route path="/" element={auth ? <Home /> : <Navigate to="/sign" />} />
          <Route
            path="/sign"
            element={!auth ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/user/settings/:id"
            element={auth ? <Settings /> : <Login />}
          />
          <Route
            path="/admin"
            element={user.admin ? <Menagement /> : <Navigate to="/" />}
          />
          <Route path ="/deals" element= {auth ? <Deals />: <Navigate to ="/sign" />} />
          <Route path ="/order" element= {auth ? <Order />: <Navigate to ="/sign" />} />
          <Route path ="/category/:name" element= {auth ? <Category />: <Navigate to ="/sign" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
