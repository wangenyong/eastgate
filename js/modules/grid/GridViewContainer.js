import {connect} from 'react-redux';
import GridView from './GridView';

export default connect(
  state => ({
    items: state.getIn(['grid', 'items'])
  })
)(GridView);