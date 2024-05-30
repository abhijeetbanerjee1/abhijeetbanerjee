import "./AboutMe.scss";
import { motion } from "framer-motion";

const hoverEffect = {
  hover: {
    scale: 1.1,
    backgroundColor: "orange",
    color: "black",
    transition: { duration: 0.3 },
  },
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

const AboutMe = () => {
  return (
    <div className="aboutme">
      <hr className="split-hr" />
      <div className="wrapper">
        <motion.h1
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img src="/3.png" alt="" />
          <p>
            Hello! I'm <span className="highlight"> Abhijeet</span>, a
            passionate <span className="highlight"> Full Stack Developer </span>{" "}
            with over
            <span className="highlight"> 2 years of experience </span> in
            creating dynamic and responsive web applications. My journey in
            software development started during my college days, and since then,
            I have been dedicated to honing my skills and staying updated with
            the latest industry trends.
            <br />I earned my{" "}
            <span className="highlight">
              {" "}
              Bachelor's degree in Computer Engineering{" "}
            </span>{" "}
            from University of Mumbai. During my time there, I developed a
            <span className="highlight">
              {" "}
              strong foundation in software development, algorithms, and data
              structures
            </span>
            . My senior project involved creating a web-based application that
            streamlined task management for small teams, which further ignited
            my passion for web development.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="another-p"
        >
          <p>
            I completed my{" "}
            <span className="highlight">
              {" "}
              Master's degree in Computer Science{" "}
            </span>{" "}
            from George Mason University. My coursework focused on{" "}
            <span className="highlight">
              {" "}
              advanced topics such as Machine Learning, Software Development for
              World Wide Web, Component based Software Development, and
              CyberSecurity
            </span>
            . During my studies, I also interned at a startup healthcare
            company, gaining hands-on experience in agile software development
            and project management.
            <br />
            When I'm not coding, I enjoy hiking, capturing moments through
            photography, and exploring new technologies. I also love reading and
            sports. Below is a quote that has helped me during my journey so
            far. Also, feel free to checkout my resume by clicking the button
            below.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="resume-download"
        >
          <motion.a
            href="/Abhijeet_Banerjee_Resume.pdf"
            target="_blank"
            rel="noopener"
            whileTap={{ scale: 0.9 }}
            whileHover={hoverEffect.hover}
          >
            Resume
          </motion.a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="quote"
        >
          <hr />
          <p>
            "First, solve the problem. Then, write the code." – John Johnson
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
