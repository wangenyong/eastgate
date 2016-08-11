import {connect} from 'react-redux';
import MovieListView from './MovieListView';
import {ListView} from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default connect(
  state => ({
    dataSource: dataSource.cloneWithRows(state.getIn(['list', 'movies']))
  })
)(MovieListView);