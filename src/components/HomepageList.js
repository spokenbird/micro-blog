import React from 'react';
import HomepageListItem from '../components/HomepageListItem';

class HomepageList extends React.Component {

  componentDidMount() {
    this.props.getTitlesFromAPI();
  }

  render() {
    return (
      <div>
        <p className="flow-text">Welcome to Microblog!</p>
        <div className="row">
          {this.props.titles.map(t => <HomepageListItem url={t.id} title={t.title} description={t.description} id={t.id} />)}
        </div>
      </div>
    )
  }
}

export default HomepageList;