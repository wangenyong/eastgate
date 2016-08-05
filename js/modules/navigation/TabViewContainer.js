import {connect} from 'react-redux';
import {ToJS} from 'immutable';
import {onTabSwitch} from './NavigationState';
import TabView from './TabView';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS()
  }),
  dispatch => ({
    switchTab(tab) {
      dispatch(onTabSwitch(tab));
    }
  })
)(TabView);