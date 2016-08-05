import {connect} from 'react-redux';
import {ToJS} from 'immutable';
import {onUserLoginSkip} from './AuthState';
import SignInView from './SignInView';

export default connect(
  state => ({
    authState: state.get('auth').toJS()
  }),
  dispatch => ({
    skipLogin() {
      dispatch(onUserLoginSkip());
    }
  })
)(SignInView);