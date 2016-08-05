/**
 * @flow
 */

'use strict'

import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';
import * as snapshotUtil from './utils/snapshot';
import * as SessionStateActions from './modules/session/SessionState';
import store from './redux/store';
import NavigationView from './modules/navigation/NavigationView';
import SignInViewContainer from './modules/auth/SignInViewContainer';

const Setup = React.createClass({
  PropTypes: {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.bool.isRequired
  },

  componentDidMount: function() {
    /**
     * 根据本地是否存在store的副本，选择初始化store或导入本地store
     */
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;
        console.log(snapshot);
        dispatch(SessionStateActions.initializeSessionState());

        /**
        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }
        */
        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      })
  },

  render: function() {
    if (!this.props.isReady) {
      return (
        <View style={styles.container}><ActivityIndicator /></View>
      )
    }
    if (this.props.isReady && !this.props.isLoggedIn) {
      return <SignInViewContainer />
    }
    return (
      <NavigationView />
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

function mapStateToProps(state) {
  return {
    isReady: state.getIn(['session', 'isReady']),
    isLoggedIn: state.getIn(['auth', 'isLoggedIn'])
  };
}

export default connect(mapStateToProps)(Setup);
