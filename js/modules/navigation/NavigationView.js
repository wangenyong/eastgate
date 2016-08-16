/**
 * @flow
 */

'use strict'

import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Navigator,
  Platform,
  BackAndroid
} from 'react-native';
import TabViewContainer from './TabViewContainer';
import MovieDetailView from '../list/MovieDetailView';
import SettingView from '../setting/SettingView';

const NavigationView = React.createClass({
  _handlers: ([]: Array<() => boolean>),

  componentDidMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  },

  componentWillUnmount: function() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  },

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  },

  addBackButtonListener: function(listener: any) {
    this._handlers.push(listener);
  },

  removeBackButtonListener: function(listener: any) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  },

  handleBackButton: function() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
    
    return false;
  },

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android' || route.name == 'Setting') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
        initialRoute={{}}
        renderScene={this.renderScene} />
    )
  },

  renderScene: function(route: any, navigator: Navigator) {
    if (route.name == 'MovieDetail') {
      return (
        <MovieDetailView title={route.title} navigator={navigator} />
      )
    }
    if (route.name == 'Setting') {
      return (
        <SettingView navigator={navigator} />
      )
    }
    return <TabViewContainer navigator={navigator} />
  }
});

NavigationView.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NavigationView;
