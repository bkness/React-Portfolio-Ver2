import React from 'react';
import Project from '../components/Project';
import { Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    name: "Local Breweries",
    description: "This Full-Stack Application lets users log in, search for, and save their favorite breweries. Users can also comment on saved breweries and delete them if desired. The application uses Node.js, Express, MySQL, Handlebars, and Sequelize for the backend, with Bootstrap for styling and Leaflet for interactive maps.",
    technologies: "MySQL/Handlebars/Express/Node",
    link: "https://bkness-localbrews-daa3c5b76d20.herokuapp.com/",
    repo: "https://github.com/bkness/LocalBreweries",
    image: "LocalBrewery",
  },
  {
    name: "Tech Blog",
    description: "Built a dynamic tech blog using the MVC architecture, enabling users to manage accounts, publish, update, and comment on posts. The application utilizes Node.js and Express.js for the server, Sequelize with MySQL for database management, and Handlebars.js for dynamic HTML rendering. Security features include bcrypt for password hashing and express-session for user session management.",
    technologies: "Node/JS/CSS/Handlebars/MySQL",
    link: "https://mvc--tech-blog-715ec89956fb.herokuapp.com/",
    repo: "https://github.com/bkness/MVC-Tech-Blog",
    image: "blog",
  },
  {
    name: "Video Game Hub",
    description: "Video Game Hub is a React application that leverages APIs to fetch comprehensive video game data. It integrates GraphQL with JWT for secure authentication and features a robust blog system powered by GraphQL queries, typeDefs, and Mutations.",
    technologies: "React/Express/Graphql/Mongo/Node",
    link: "https://video-game-hub.onrender.com/",
    repo: "https://github.com/bkness/video-game-hub-project3",
    image: "game",
  },
  {
    name: "Readme Generator",
    description: "This project leverages Node.js packages, including inquirer and fs, to create prompts for a professional README generator. The goal is to streamline the creation of README files, making them engaging and easy to follow, and reducing the mundane tasks often associated with them.",
    technologies: "Node/Inquirer/JavaScript",
    link: "https://github.com/bkness/readme-generator/assets/123907755/cfad32a6-95b1-4ca9-aeab-f836b7cc1f21",
    repo: "https://github.com/bkness/readme-generator",
    image: "readme_gen",
  },
  {
    name: "Key Generator",
    description: "Developed a robust password generator application using JavaScript, HTML, and CSS. This dynamic tool allows users to generate secure passwords based on selected criteria such as length and character types (lowercase, uppercase, numeric, special characters). Implemented using arrays and randomized selection methods, the generator ensures each password meets specified security requirements.",
    technologies: "HTML/CSS/JavaScript",
    link: "https://bkness.github.io/javascript-key-generator",
    repo: "https://github.com/bkness/javascript-key-generator",
    image: "keygen",
  },
  {
    name: "Open Weather Database",
    description: "This application serves as a streamlined weather forecasting tool, enabling users to retrieve current and five-day forecasts by city. Upon searching for a city, the app displays the current weather conditions alongside a five-day forecast, complete with graphical representations of anticipated weather patterns. User-entered cities are persistently stored in local storage, facilitating quick access for future reference until manually cleared.",
    technologies: "HTML/CSS/JS/OpenWeatherAPI",
    link: "https://bkness.github.io/open-weather-api",
    repo: "https://github.com/bkness/open-weather-api",
    image: "weather",
  },
  {
    name: "Advanced CSS-Portfolio",
    description: "This project showcases my proficiency in advanced CSS techniques and responsive design principles. Developed as an HTML portfolio, it leverages Flexbox and media queries to ensure optimal display across a wide range of devices and screen sizes.",
    technologies: "HTML/CSS/FlexBox",
    link: "https://bkness.github.io/advanced-css-portfolio",
    repo: "https://github.com/bkness/advanced-css-portfolio",
    image: "portfolio",
  },
  {
    name: "Social Media API",
    description: "This API is a social network web application backend designed to enhance proficiency with MongoDB, Express.js, and Mongoose. Developed and tested using Insomnia, it facilitates users in sharing thoughts, reacting to friends' posts, and managing friend lists. Ideal for developers seeking hands-on experience in building robust web applications with modern technologies.",
    technologies: "MongoDB/Express/React/Node",
    link: "https://www.youtube.com/watch?v=g3LsVPTANH0",
    repo: "https://github.com/bkness/Social-Network-API",
    image: "social",
  },
  {
    name: "Random Cocktail Generator",
    description: "This project is a dynamic cocktail generator built using HTML, CSS, and JavaScript, integrating API fetches to retrieve real-time cocktail recipes. It demonstrates proficiency in front-end web development, showcasing interactive user interfaces and seamless API integration to provide users with a variety of cocktail options at their fingertips.",
    technologies: "HTML/JavaScript/CSS",
    link: "https://bkness.github.io/Random-Cocktail-API",
    repo: "https://github.com/bkness/Random-Cocktail-API",
    image: "cocktail",
  }
];


function Portfolio() {
  return (
    <Container className="my-5">
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} lg={6} key={index} className="mb-4">
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
