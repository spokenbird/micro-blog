import { connect } from "react-redux";
import HomepageList from '../components/HomepageList'
import { getTitlesFromAPI } from "../actionCreators";

function mapStateToProps(state) {
  return {
    titles: state.titles,
    posts: state.posts
  }
}

export default connect(mapStateToProps, {getTitlesFromAPI})(HomepageList)