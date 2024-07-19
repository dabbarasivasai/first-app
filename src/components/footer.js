import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container" >
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Vehicles">
                Vehicles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact us
              </Link>
            </li>
          </ul>
          <div data-testid="footer-content">
            <p className="text-center text-body-secondary">
              © 2024 ABC Automobiles
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
