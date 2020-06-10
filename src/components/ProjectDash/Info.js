import React from 'react';
import Avatar from '../Avatar/Avatar';
import {
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears
} from 'date-fns';

class Info extends React.Component {
  renderTags = tags => {
    if (!tags.length) {
      return;
    } else if (tags) {
      let tagsList = tags.map((tag, i) => {
        return (
          <li key={i} className="tag">
            {tag}
          </li>
        );
      });
      return tagsList;
    }
  };

  formatProjectDate = date => {
    const projectDate = new Date(date);
    const currentDate = new Date();
    const diffInDays = differenceInDays(currentDate, projectDate);
    let output = null,
      interval = 'day',
      number = 0;

    if (diffInDays === 0) {
      output = 'Today';
    } else if (diffInDays === 1) {
      output = 'Yesterday';
    } else if (diffInDays < 7) {
      interval = 'day';
      number = diffInDays;
    } else if (diffInDays < 30) {
      interval = 'week';
      number = differenceInWeeks(currentDate, projectDate);
    } else if (diffInDays < 365) {
      interval = 'month';
      number = differenceInMonths(currentDate, projectDate);
    } else {
      interval = 'year';
      number = differenceInYears(currentDate, projectDate);
    }

    if (output === null) {
      return `${number} ${interval}${number !== 1 ? 's' : ''} ago`;
    } else {
      return output;
    }
  };

  render() {
    const {
      project: {
        description = '',
        tags = [],
        date_created = new Date(),
        project_creator = {}
      }
    } = this.props;

    return (
      <article className="card project-info">
        <h3 className="title">Project Info</h3>
        <p className="user">
          Created by{' '}
          {project_creator
            ? `${project_creator.first_name} ${project_creator.last_name}`
            : 'N/A'}
          <Avatar
            first_name={project_creator.first_name}
            last_name={project_creator.last_name}
          />
        </p>
        <p>Created on: {this.formatProjectDate(date_created)}</p>
        <p>{description}</p>
        <ul className="tags">{this.renderTags(tags)}</ul>
      </article>
    );
  }
}

export default Info;
