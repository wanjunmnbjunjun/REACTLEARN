import React, { Component } from 'react'
import './index.less'
import {adminRouter} from './routes/'
import {Route,Switch,Redirect} from 'react-router-dom'
import {Frame} from './components/'



class App extends Component {
  render() {
    return (
      <Frame>
        <Switch>
          {adminRouter.map(route =>{
            return (
            <Route  
              key={route.pathname} 
              path={route.pathname} 
              exact={route.exact}  
              render={(routerProps) =>{
                return <route.component  {...routerProps}  />
              }} />)
          })}
          <Redirect to={adminRouter[0].pathname} from='/admin' exact />
          <Redirect to='/404' />
        </Switch>
      </Frame>
    )
  }
}
export default App
