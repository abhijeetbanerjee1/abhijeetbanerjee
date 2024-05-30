import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const hoverEffect = {
  hover: {
    backgroundColor: "lightgray",
    color: "black",
    transition: { duration: 0.3 },
  },
};

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-1050%",
//     transition: {
//       repeat: Infinity,
//       repeatType: "mirror",
//       duration: 20,
//     },
//   },
// };

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Abhijeet Banerjee</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.h1 variants={textVariants}>and Full-Stack</motion.h1>
          <motion.h1 variants={textVariants}>Developer</motion.h1>

          <motion.div
            variants={textVariants}
            className="buttons"
            initial="hidden"
            animate="visible"
          >
            <motion.a href="#Projects">
              <motion.button
                variants={textVariants}
                whileTap={{ scale: 0.9 }}
                whileHover={hoverEffect.hover}
              >
                See the Latest Work
              </motion.button>
            </motion.a>
            <motion.a href="#Contact">
              <motion.button
                variants={textVariants}
                whileTap={{ scale: 0.9 }}
                whileHover={hoverEffect.hover}
              >
                Contact Me
              </motion.button>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="imageContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <img src="1.png" alt="" />
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer Full-Stack Developer
      </motion.div> */}
    </div>
  );
};

export default Hero;
