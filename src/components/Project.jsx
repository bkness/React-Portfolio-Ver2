import React from 'react';
import * as projects from '../assets';
import './Project.css';

function Project({ project }) {
  const { name, repo, link, description, technologies, image } = project;

  console.log('Project data:', project);

  return (
    <div className="project-item">
      <img src={projects[image]} alt={name} className="project-image" />
      <div className="project-info">
        <h1>
          <a href={link} target='_blank' rel='noopener noreferrer' className='project-title'>{name}</a>{' '}
          <a href={repo} target='_blank' rel='noopener noreferrer' className='repo'>
            GitHub 
            {/* <i className="fab fa-github"></i> */}
          </a>
        </h1>
        <p className='descrip'>{description}</p>
        <div className='technologies'>
          <strong className='strong-tech'>Technologies:</strong>
          <span>{technologies}</span>
        </div>
      </div>
    </div>
  );
}

export default Project;
