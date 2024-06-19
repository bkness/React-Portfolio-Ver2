import React from 'react';
import * as projects from '../assets';
import './Project.css';

function Project({ project }) {
  const { name, repo, link, description, technology, image } = project;

  return (
    <div className="project-item">
      <img src={projects[image]} alt={name} className="project-image" />
      <div className="project-info">
        <h1>
          <a href={link} target='_blank' rel='noopener noreferrer' className='project-title'>{name}</a>{' '}
          <a href={repo} target='_blank' rel='noopener noreferrer'>
            <i className="fab fa-github"></i>
          </a>
        </h1>
        <p className='descrip'>{description}</p>
        <p className='technology'>{technology}</p>
      </div>
    </div>
  );
}

export default Project;
