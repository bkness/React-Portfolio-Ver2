import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import * as projects from '../assets';
import './Project.css';

function Project({ project }) {
  const { name, repo, link, description, technologies, image } = project;

  return (
    <motion.div className="project-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <motion.img
          src={projects[image]}
          alt={name}
          className="project-image"
          whileHover={{ scale: 1.02, opacity: 0.6 }}
        />
      </a>
      <div className="project-info">
        <h1>
          <a href={link} target='_blank' rel='noopener noreferrer' className='project-title'>{name}</a>{' '}
          <a href={repo} target='_blank' rel='noopener noreferrer' className='repo'>
            GitHub <FaGithub className='icon' />
          </a>
        </h1>
        <motion.p className='descrip'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        <div className='technologies'>
          <strong className='strong-tech'>Technologies:</strong>
          <span>{technologies}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
