import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as Switch,
} from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to={'/home'} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
