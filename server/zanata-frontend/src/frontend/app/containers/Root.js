import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import App from '../containers/App'
import Glossary from '../containers/Glossary'
import Languages from '../containers/Languages'
import StyleGuide from '../containers/StyleGuide'
import Users from '../containers/Admin/Users'
import Roles from '../containers/Admin/Roles'
import Search from '../containers/Admin/Search'
import TestModal from '../containers/TestModal'
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
              <Route path='explore' component={Explore} />
<<<<<<< HEAD
              <Route path='testmodal' component={TestModal} />
=======
              <Route path='glossary/project/:projectSlug'
                component={Glossary} />
>>>>>>> eda82cd0166f128c6bc0da35fc56798c179e848c
              <Route path='glossary' component={Glossary} />
              <Route path='languages' component={Languages} />
              <Route path='styleguide' component={StyleGuide} />
              <Route path='profile/view/:username' component={UserProfile} />
<<<<<<< HEAD
              <Route path='project/:projectSlug/glossary'
                component={Glossary} />
              <Route path='users' component={Users} />
              <Route path='roles' component={Roles} />
              <Route path='search' component={Search} />
=======
>>>>>>> eda82cd0166f128c6bc0da35fc56798c179e848c
              <Redirect from='profile' to={`profile/view/${username}`} />
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
