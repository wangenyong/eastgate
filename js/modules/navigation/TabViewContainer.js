import {connect} from 'react-redux';
import {onTabSwitch} from './NavigationState';
import TabView from './TabView';

export default connect(
  state => ({
    tab: state.getIn(['navigation', 'tab'])
  }),
  dispatch => ({
    switchTab(tab) {
      dispatch(onTabSwitch(tab));
    }
  })
)(TabView);