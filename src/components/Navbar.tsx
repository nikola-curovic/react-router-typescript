import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-menu">Home</div>
      </Link>
      <Link to="/adduser">
        <div className="navbar-menu">Add User</div>
      </Link>
    </div>
  );
};

export default Navbar;
