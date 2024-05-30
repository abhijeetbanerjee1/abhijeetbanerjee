import "./Skills.scss";
import { motion } from "framer-motion";

const skillDict = {
  React: "/react.png",
  Java: "/java.png",
  JavaScript: "/javascript.png",
  Python: "/python.png",
  "C++": "/c-logo.png",
  TypeScript: "/typescript.png",
  "Node.js": "/nodejs.png",
  "Express.js": "/express-js.png",
  MongoDB: "/mongodb.png",
  MySQL: "/mysql.png",
  AWS: "/aws.png",
  GitHub: "/github.png",
};

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <div className="skills">
      <hr className="split-hr" />
      <motion.div
        className="wrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h1 variants={variants}>Skills</motion.h1>
        <motion.p className="intro" variants={variants}>
          These are the skills I've honed and continue to expand upon through my
          journey.
        </motion.p>
        <motion.div
          className="skill-icons"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {Object.entries(skillDict).map(([title, imgSrc]) => (
            <motion.div className="skill-card" key={title}>
              <motion.img src={imgSrc} alt="" />
              <h5>{title}</h5>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
