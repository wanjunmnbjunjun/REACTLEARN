import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {mainRouter} from './routes/'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/admin'  render={(routerProps) => {
        //TODO 后期做权限控制
        return <App  {...routerProps}   />

      }}  />

      {
        mainRouter.map(route => {
          return <Route key={route.pathname} path={route.pathname} component={route.component} ></Route>
        })
      }
      <Redirect to='/admin' from='/' ></Redirect>
      <Redirect to='/404'  ></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);


