import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import {
  rootAppPath,
  uploadVideoAppPath,
  videoListAppPath,
} from './utils/paths';

import Home from './pages/Home';
import Video from './pages/Video';
import Upload from './pages/Upload';

export default () => (
  <Router>
    <Switch>
      <Route exact path={rootAppPath} component={Home} />
      <Route exact path={videoListAppPath} component={Video} />
      <Route exact path={uploadVideoAppPath} component={Upload} />
    </Switch>
  </Router>
);
