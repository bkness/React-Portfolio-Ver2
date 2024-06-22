import React from "react";
import profileImage from "../assets/projects/profileImage.png"
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="title">About Me</h1>
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <p className="text">
      Hello, my name is Brandon Kelly. I am a dedicated and detail-oriented Web Developer, skilled in HTML, CSS, JavaScript, TypeScript, Node, React, MongoDB, GraphQL, and SQL. A Full-Stack Bootcamp graduate, I am passionate about creating user-friendly and visually appealing web applications. <br /> <br></br>

With a strong foundation in coding and a keen eye for detail, I thrive on bringing ideas to life through code. My background in high-pressure environments and customer service has honed my multitasking abilities and problem-solving skills, allowing me to deliver efficient, high-quality results. <br /> <br></br>

In addition to my technical expertise, I bring a unique perspective to web development, leveraging my experience in project management, leadership, and botany. This diverse background enables me to approach challenges with creativity and innovation. <br /> <br></br>

Feel free to navigate through my portfolio using the links at the top of the page. Thank you for visiting, and I look forward to connecting with you!      </p>
    </div>
  );
}
