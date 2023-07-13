import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import logo from "../assets/images/bookWorm.png";

export default function Navbar() {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <img className="h-10 md:h-16" src={logo} alt="log" />
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/#">All Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/#">Login</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/#">Sign-up</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
