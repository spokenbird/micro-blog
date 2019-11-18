import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {

  render() {
    return (
        <div className="header">
          <div className="col s12">
            <div className="card blue darken-2">
            <div className="container">
              <div className="card-content white-text">
                <h1>Microblog</h1>
                <h5>Get in the Rithm of blogging!</h5>
                <div className="card-action">
                  <Link to="/">Blog</Link>
                  <span> | </span>
                  <Link to="/new">Add a new post</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;