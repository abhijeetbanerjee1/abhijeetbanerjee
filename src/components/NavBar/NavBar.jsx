import "./NavBar.scss";
import { motion } from "framer-motion";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* {Side bar} */}
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <hr />
          <a
            href="https://www.linkedin.com/in/abhijeet-banerjee"
            target="_blank"
          >
            <img title="LinkedIn" src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/abhijeetbanerjee1" target="_blank">
            <img title="GitHub" src="/github.png" alt="" />
          </a>
          <a
            href="https://codepen.io/Abhijeet-Banerjee-the-typescripter"
            target="_blank"
          >
            <img title="CodePen" src="/codepen.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
