// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 text-3xl font-bold">AM</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl">
        <a href="https://www.linkedin.com/in/akshmo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        <a href="https://github.com/akshmohan">  <FaGithub /></a>
      
      </div>
    </nav>
  );
};

export default Navbar;
