import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProjectForm from './components/ProjectForm/ProjectForm';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import FeedPage from './components/FeedPage/FeedPage';
import Chat from './components/Chat/Chat';
import ChatMessages from './components/ChatMessages/ChatMessages';
import Login from './components/Login/Login';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={'/login'} component={Login} />
          <Route path={'/my-projects'} component={ProjectsPage} />
          <Route path={'/project-form'} component={ProjectForm} />
          <Route path={'/feeds'} component={FeedPage} />
          <Route exact path={'/chats'} component={Chat} />
          <Route exact path={'/chats/messages'} component={ChatMessages} />
        </Switch>
      </div>
    );
  }
}
