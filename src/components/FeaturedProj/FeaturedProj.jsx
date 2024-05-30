import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeaturedProj.scss";

const hoverEffect = {
  hover: {
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

const tabs = [
  {
    id: "tab1",
    label: "Personal Projects",
    projects: [
      {
        id: "project1",
        title: "Issue Tracker",
        content:
          "This project is an issue tracker application that enables users to sign in, add issues with status updates, and assign them to specific users for efficient management and tracking.",
        tech: "NextJS, Radix UI and PostgreSQL",
        imgSrc: "/issue-tracker.png",
        github: "https://github.com/abhijeetbanerjee1/issue-tracker",
        link: "https://issue-tracker-mocha-three.vercel.app/",
      },
      {
        id: "project2",
        title: "Game Explorer",
        content:
          "This project is an app leveraging an API to simulate a website in which you can explore new and exciting games based on their platform, genre and search games individually.",
        tech: "React and Tailwind CSS",
        imgSrc: "/game-explorer.png",
        github: "https://github.com/abhijeetbanerjee1/game-explorer",
        link: "https://game-explorer-five.vercel.app/",
      },
      {
        id: "project3",
        title: "Chat App",
        content:
          "This app supports group chats, 1-on-1 chats, real-time messaging, image, and file support, read receipts, and more!",
        tech: "ReactJS and NodeJS",
        imgSrc: "/chat-app.png",
        github: "https://github.com/abhijeetbanerjee1/Node-ChatApp",
      },
    ],
  },
  {
    id: "tab2",
    label: "More Projects",
    projects: [
      {
        id: "more-project1",
        title: "Credit Card Fraud-Detection Model",
        content:
          "The project aims improve fraud detection by comparing sampling techniques, classifiers, and metrics using a skewed dataset, emphasizing precision, recall, and AUC-PR over accuracy.",
        imgSrc: "/card-fraud.webp",
        github:
          "https://github.com/abhijeetbanerjee1/Data_Science_Projects/tree/main/Credit%20Card%20Fraud-Detection%20Model",
      },
      {
        id: "more-project2",
        title: "Web Scraper",
        content:
          "This web scraping tool aims to automates the search for job postings matching users' skills and qualifications, enabling them to focus on applying for suitable positions.",
        imgSrc: "/web-scraper.webp",
        github:
          "https://github.com/abhijeetbanerjee1/Data_Science_Projects/tree/main/Web%20Scraper",
      },
      {
        id: "more-project3",
        title: "Sentiment Analyzer Engine",
        content:
          "This project uses sentiment analysis to classify textual data as positive, negative, or neutral, providing insights into public opinions and emotions, particularly for social media monitoring.",
        imgSrc: "/sentiment.webp",
        github:
          "https://github.com/abhijeetbanerjee1/Data_Science_Projects/tree/main/Sentiment%20Analyzer%20Engine",
      },
      {
        id: "more-project4",
        title: "Cluster Analysis",
        content:
          "This project performs cluster analysis on text data, identifying common themes by cleaning the data, converting it into TF-IDF vectors, applying K-means clustering, and generating a word cloud for visualization.",
        imgSrc: "/cluster.webp",
        github:
          "https://github.com/abhijeetbanerjee1/Data_Science_Projects/tree/main/Cluster%20Analysis",
      },
      {
        id: "more-project5",
        title: "Sentence Classification from Scratch",
        content:
          "This project involves identifying the framing of sentences in multiple languages and outputting the results as a TSV file with each sentence and its corresponding label.",
        imgSrc: "/classification.webp",
        github:
          "https://github.com/abhijeetbanerjee1/Data_Science_Projects/tree/main/Sentence%20Classification%20from%20Scratch",
      },
      {
        id: "more-project6",
        title: "Drugs Prescription Using Reviews",
        content:
          "This project employs NLP and ML to analyze drug sales data, determining the most effective drugs for various conditions and uncovering trends to support data-driven decision-making.",
        imgSrc: "/reviews.webp",
        github:
          "https://github.com/abhijeetbanerjee1/Data_Science_Projects/tree/main/Drugs%20Prescription%20Using%20Reviews",
      },
    ],
  },
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  const currentTabContent = tabs.find((tab) => tab.id === selectedTab);

  return (
    <div className="tabs">
      <hr className="split-hr" />
      <motion.div
        className="wrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h1>Projects</h1>
        <div className="tab-headers">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-header ${tab.id === selectedTab ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.3 }}
              className="tab-pane"
            >
              {currentTabContent.projects.map((project) => (
                <div key={project.id}>
                  <motion.div
                    className="project-description"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.content}
                  </motion.div>
                  <img src={project.imgSrc} alt="" />

                  <h2>{project.title}</h2>
                  <p>{project.tech}</p>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileTap={{ scale: 0.9 }}
                    whileHover={hoverEffect.hover}
                  >
                    View Code
                  </motion.a>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      whileTap={{ scale: 0.9 }}
                      whileHover={hoverEffect.hover}
                    >
                      View Live
                    </motion.a>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Tabs;
