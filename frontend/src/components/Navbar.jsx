import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Churn Predictor</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/predict">Predict</Link>
      </div>
    </nav>
  );
}

export default Navbar;