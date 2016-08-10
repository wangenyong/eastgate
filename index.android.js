/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'

import 'es6-symbol/implement';
import {Provider} from 'react-redux';
import store from './js/redux/store';
import Setup from './js/setup';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid
} from 'react-native';

const eastgate = React.createClass({
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
    return false;
  },

  render: function() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    )
  }
})

eastgate.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

AppRegistry.registerComponent('eastgate', () => eastgate);
