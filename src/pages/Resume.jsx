import React from "react";
import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-container"> <br />
       <div className="contact-info">
      <h1 className="name">Brandon Michael Kelly</h1> <br />
        <div>
          Cottonwood, AZ 86326 | Phone: 928-274-6725<br />
        </div>
        <a href="mailto:kbrandon863@gmail.com">Email</a> |
        <a href="https://www.linkedin.com/in/brandon-kelly-367b3730b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/bkness" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div> <br />

      <h2 className="section-title">Summary</h2> <br />
      <p className="summary">
        Dedicated and detail-oriented Web Developer and Full-Stack Bootcamp graduate, skilled in HTML, CSS, JavaScript, TypeScript, Node, React, MongoDB, GraphQL and SQL. Passionate about creating user-friendly and visually appealing web applications. Demonstrates strong multitasking abilities, excellent problem-solving skills, and a keen eye for detail. Leverages a diverse background in high-pressure environments and customer service to deliver efficient, high-quality results. Experienced in project management, customer service, leadership, and botany from previous roles, bringing a unique perspective to web development.      </p> <br />

      <h2 className="section-title">Technical Skills</h2> <br />
      <p className="skills">
        <strong className="skill-def">Languages:</strong> HTML5, CSS3, JavaScript, React<br />
        <strong className="skill-def">Frameworks & Libraries:</strong> Bootstrap, Tailwind, jQuery, Redux, Handlebars.js, Node.js<br />
        <strong className="skill-def">Tools & Platforms:</strong> Git, GitHub, VS Code, Heroku, MongoDB, GraphQL, Netlify, Render, Firebase<br />
        <strong className="skill-def">Other:</strong> Responsive Design, RESTful APIs, Agile Methodologies
      </p> <br />

      <h2 className="section-title">Related Experiences</h2> <br />
      <div className="project">
        <strong className="project-description">Arizona State University Web Development Program</strong> 
      </div><br />

      <div className="project">
        <strong className="project-description">Tech Blog</strong> |
        <a href="https://github.com/bkness/MVC-Tech-Blog" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://mvc--tech-blog-715ec89956fb.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a><br />
        Developed a full-stack application for users to post and comment on tech articles.<br />
        <strong className="project-description">Responsibilities:</strong> Created front-end interface with Handlebars.js, implemented user authentication, and set up RESTful API routes.<br />
        <strong className="project-description">Technologies:</strong> Node.js, Express, MySQL, Handlebars.js
      </div> <br />

      <div className="project">
        <strong className="project-description">Random Cocktail Generator</strong> |
        <a href="https://github.com/bkness/Random-Cocktail-API" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://bkness.github.io/Random-Cocktail-API" target="_blank" rel="noopener noreferrer">Live</a><br />
        Built a web application to generate random cocktail recipes using an external API.<br />
        <strong className="project-description">Responsibilities:</strong> Designed UI with HTML and CSS, integrated API with JavaScript, and ensured responsive design.<br />
        <strong className="project-description">Technologies:</strong> HTML, CSS, JavaScript, REST API
      </div> <br />

      <div className="project">
        <strong className="project-description">Open Weather Database</strong> |
        <a href="https://github.com/bkness/open-weather-api" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://bkness.github.io/open-weather-api" target="_blank" rel="noopener noreferrer">Live</a><br />
        Created a weather application that fetches and displays weather data for user-selected cities.<br />
        <strong className="project-description">Responsibilities:</strong> Developed front-end with HTML, CSS, and JavaScript, implemented API calls, and handled data presentation.<br />
        <strong className="project-description">Technologies:</strong> HTML, CSS, JavaScript, OpenWeatherAPI
      </div> <br />

      <h2 className="section-title">Experience</h2> <br />

      <div className="experience"> 
        <strong className="project-description">Creekside American Bistro, Bartender</strong> | <strong className="date">March 2019 – January 2021</strong><br />
        <div className="location"> Cottonwood, AZ<br /></div> <br />
        Crafted and served signature cocktails, maintained bar inventory, and ensured exceptional customer service.<br />
        <strong className="project-description">Key Accomplishments:</strong> Recognized for exceptional customer service, led a team during high-volume events.
      </div> <br />

      <div className="experience">
        <strong className="project-description">Main Stage, Bartender</strong> | <strong className="date">June 2015 – November 2023</strong><br />
        <div className="location">Cottonwood, AZ<br /></div> <br />
        On-call bartender when they are short-staffed. Swiftly making and serving cocktails to patrons on busy nights. Keeping awareness of intoxicated customers to ensure a safe environment for staff and customers.
      </div> <br />

      <div className="experience">
        <strong className="project-description">Enchantment Resort, Bartender</strong> | <strong className="date">March 2018 – March 2019</strong><br />
        <div className="location">Sedona, AZ<br /></div> <br />
        Responsible for serving drinks to the restaurant, Tii Gavo, and the entire wine bar. Other responsibilities include stocking, balancing cash drawers, upselling tickets, keeping a clean bar, preparing juices and ingredients for seasonal drinks.
      </div> <br />

      <h2 className="section-title">Education</h2> <br />

      <div className="education">
        <strong className="project-description">Full Stack Web Development Boot Camp Certificate</strong> | <strong className="date">February 2024</strong><br />
        <div className="location">Arizona State University, Phoenix, AZ</div><br />
        Completed an intensive program focused on full-stack development, covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Developed and deployed multiple web applications, gaining hands-on experience in agile development methodologies and project management.
      </div>
    </div>
  );
}
