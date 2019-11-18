import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomepageListContainer from './containers/HomepageListContainer';
import Header from './Header';
import PostViewContainer from './containers/PostViewContainer';
import PostFormContainer from './containers/PostFormContainer';

class Routes extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Route path="/" render={() => <Header />} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <HomepageListContainer />} />
            <Route exact path="/new" render={(routeProps) => <PostFormContainer {...routeProps} editing={false} title="" description="" body="" />} />
            <Route exact path="/:postId" render={(routeProps) => <PostViewContainer {...routeProps} />} />
          </Switch>
          <Redirect to="/" />
        </div>
      </React.Fragment>
    )
  }
}

export default Routes;