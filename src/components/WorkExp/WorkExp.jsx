import "./WorkExp.scss";
import { motion } from "framer-motion";

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

const WorkExp = () => {
  return (
    <div className="workexp">
      <hr className="split-hr" />
      <div className="wrapper">
        <motion.h1
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Experience
        </motion.h1>
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            My professional experience over <br />
            the last four years
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="devdev"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="jobDesc" variants={variants}>
            <div className="job-title">
              <h2>Software Developer</h2>
              <h3>Nexus 8 International</h3>
              <p>Aug 2023 - May 2024</p>
            </div>
            <div className="job-description">
              <ul>
                <li>
                  Enhanced platform{" "}
                  <span className="highlight">
                    {" "}
                    Search engine optimization{" "}
                  </span>{" "}
                  capabilities, leading to a 45% increase in organic search
                  traffic.
                </li>
                <li>
                  Converted Figma designs to fully responsive web pages 30%
                  faster than the team average, by using optimized{" "}
                  <span className="highlight"> HTML, CSS, and JS </span>
                  working in an Agile environment.
                </li>
                <li>
                  Enhanced user interface load times by 25% by developing and
                  implementing optimized, reusable{" "}
                  <span className="highlight"> ASP.Net Core Blazor </span>{" "}
                  components.
                </li>
              </ul>
            </div>
          </motion.div>
          <hr />
          <motion.div className="jobDesc" variants={variants}>
            <div className="job-title">
              <h2>Graduate Research Assistant</h2>
              <h3>George Mason University</h3>
              <p>Jul 2023 - Dec 2023</p>
            </div>
            <div className="job-description">
              <ul>
                <li>
                  Developed{" "}
                  <span className="highlight">
                    {" "}
                    NLP-based tools with Python to automate research
                  </span>
                  , enhancing efficiency and discovering common barriers
                  impacting 80% of students.
                </li>
                <li>
                  Streamlined{" "}
                  <span className="highlight">
                    {" "}
                    data processing and analysis{" "}
                  </span>{" "}
                  phases, reducing resource used by 70%, while maintaining
                  rigorous academic standards.
                </li>
                <li>
                  Facilitated enhanced{" "}
                  <span className="highlight"> data collection </span> across
                  more than 50 interviews and 200 surveys, maintaining data
                  accuracy and comprehensive detail.
                </li>
              </ul>
            </div>
          </motion.div>
          <hr />
          <motion.div className="jobDesc" variants={variants}>
            <div className="job-title">
              <h2>Software Developer</h2>
              <h3>Vzxn</h3>
              <p>Jun 2020 - Dec 2021</p>
            </div>
            <div className="job-description">
              <ul>
                <li>
                  Implemented a{" "}
                  <span className="highlight"> real-time sales analytics </span>{" "}
                  feature in the administrative panel, enhancing strategic
                  decision-making by 30% and enriching consumer behavior
                  insights.
                </li>
                <li>
                  Deployed and managed the application on{" "}
                  <span className="highlight">
                    {" "}
                    AWS, using EC2, S3, and RDS{" "}
                  </span>
                  to achieve 99.9% uptime, increase scalability by 50%, and
                  enhance user experience.
                </li>
                <li>
                  Boosted customer engagement by 40% by strategically enhancing
                  the digital interface and{" "}
                  <span className="highlight"> user experience</span>, improving
                  customer satisfaction and loyalty.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExp;
