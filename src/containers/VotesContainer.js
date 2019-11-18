import { connect } from 'react-redux';
import Votes from "../components/Votes";
import { changeVotes } from "../actionCreators";

function mapStateToProps(state, ownProps) {
  let votes = state.titles.find(t => t.id === ownProps.id).votes;
  return {
    votes,
    titles: state.titles
  }
}

const mapDispatchToProps = {
  changeVotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Votes)