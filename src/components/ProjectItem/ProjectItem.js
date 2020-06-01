import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.css';

export default class FeedItem extends Component {
  render() {
    let project = this.props.project;
    return (
      <div className="oneProject">
        <h3>
          <span className="bold">Name:</span>
          {project.name}
        </h3>
        <p>
          <span className="bold">Description:</span>
          {project.description}
        </p>
        <div>
          <span className="bold">Tags</span>
          {project.tags.map((tag, i) => {
            return <span key={i}> | {tag}</span>;
          })}
        </div>
        <p>
          <span className="bold">GitHub url:</span>
          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.github_url}
          </Link>
        </p>
        <p>
          <span className="bold">Live url:</span>
          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.live_url}
          </Link>
        </p>
        <p>
          <span className="bold">Trello url</span>
          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.trello_url}
          </Link>
        </p>
        <Link to={`/project-dash/${project.id}`}>Go to dashboard</Link>
      </div>
    );
  }
}
