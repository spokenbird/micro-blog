import React, { Component } from "react";
import './votes.scss';

class Votes extends Component {
  render() {
    return (
      <div className="votes">
        <p>
        <span>{this.props.votes} votes</span>
        <i onClick={() => this.props.changeVotes(this.props.id, 'up')} className="material-icons small up">chevron_right</i>
        <i onClick={() => this.props.changeVotes(this.props.id, 'down')} className="material-icons small down">chevron_right</i>
        </p>
      </div>
    );
  }
}

export default Votes;