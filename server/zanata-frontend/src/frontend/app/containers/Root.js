import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import App from '../containers/App'
import Loader from '../containers/Loader'
import Glossary from '../containers/Glossary'
import Users from '../containers/Admin/Users'
import Roles from '../containers/Admin/Roles'
import Search from '../containers/Admin/Search'
import Explore from '../containers/Explore'
import UserProfile from '../containers/UserProfile'
import { View } from 'zanata-ui'

export default class Root extends Component {
  render () {
    const username = window.config.user.username
    const {
      store,
      history
    } = this.props
    return (
      <Provider store={store}>
        <View>
          <Router history={history}>
            <Route component={App} >
              <Route path='loader' component={Loader} />
              <Route path='explore' component={Explore} />
              <Route path='glossary' component={Glossary} />
              <Route path='admin/:users' component={Users} />
              <Route path='admin/:roles' component={Roles} />
              <Route path='admin/:search' component={Search} />
              <Route path='profile/:username' component={UserProfile} />
              <Route path='project/:projectSlug/glossary'
                component={Glossary} />
              <Redirect from='profile' to={`profile/${username}`} />
              <Redirect from='/' to={`profile/${username}`} />
            </Route>
          </Router>
        </View>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
