import React from 'react';
import {Link} from 'react-router-dom';
import VotesContainer from '../containers/VotesContainer';
import "./HomepageListItem.scss";

class HomepageListItem extends React.Component {

  render() {
    return (
      <div className="home-list col s12 card hoverable">
        <h1 className="card-title">
          <Link to={`${this.props.url}`}>{this.props.title}</Link>
        </h1>
        <p className="card-text">{this.props.description}</p>
        <div className="card-action">
          <VotesContainer id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default HomepageListItem;