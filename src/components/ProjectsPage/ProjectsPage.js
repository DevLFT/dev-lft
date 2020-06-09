import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectApiService from '../../services/project-api-service';
import ProjectItem from '../ProjectItem/ProjectItem';

// images
import { PlusIcon } from '../../images';

export default class ProjectsPage extends Component {
  state = {
    projects: [],
    creating: false
  };

  componentDidMount() {
    this.getUserProjects();
  }

  getUserProjects() {
    ProjectApiService.getAllUserProjects().then(res => {
      this.setState({ projects: res });
    });
  }

  createNewProject = () => {
    this.setState({
      creating: true
    });
  }

  handleCreation = () => {
    this.getUserProjects();
    this.handleCreateCancelled();
  }

  handleCreateCancelled = () => {
    this.setState({
      creating: false
    });
  }

  render() {
    const { creating } = this.state;

    return (
      <section className="page projects">
        <Helmet>
          <title>Your Projects - Dev LFT</title>
        </Helmet>

        <header>
          <div className="wrapper">
            <h2>Your Projects</h2>
            <Button disabled={creating} swap={PlusIcon} onClick={this.createNewProject}>Create new project</Button>
          </div>
        </header>

        <div className="page-content">
          <div className="wrapper">
            {creating
              ? <ProjectForm onCreate={this.handleCreation} onCancel={this.handleCreateCancelled} />
              : ''}

            {this.state.projects.length !== 0
              ? (
                <div>
                  {this.state.projects.map((project, i) => {
                    return <ProjectItem key={i} project={project} />;
                  })}
                </div>
              )
              : 'No projects available!'}
          </div>
        </div>

      </section>
    );
  }
}

ProjectsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
