import React, { Component, PropTypes } from 'react';
import TechStackItem from './TechStackItem';

export default class Project extends Component {
  	constructor(props){
  		super(props);
  		console.log(this.props)
  	}

  render() {
    const { project } = this.props;
    return (
      <div className="project-container" style={{background: project.background_color}}>
        <div className="desktop-screenshot-container">
        </div>
        <div className="project-body">
          <div className="project-intro">
            <h2>{project.title}</h2>
            { project.tagline }
          </div>
          <ul className="project-links">
            <a href={project.github_url} target="_blank">
              <li>View project
              <i className="fa fa-external-link-square"></i></li>
            </a>
            {project.github_url ? 
              <a href={project.github_url} target="_blank">
                <li>Github
                <i className="fa fa-external-link-square"></i></li>
              </a>
            : null }
          </ul>
          <div className="project-details">
            {project.background}
          </div>
        </div>
      </div>
    );
  }
}
