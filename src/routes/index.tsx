import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as Switch,
} from "react-router-dom";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
