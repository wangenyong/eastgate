/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'

import {Provider} from 'react-redux';
import store from './js/redux/store';
import Setup from './js/setup';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const eastgate = React.createClass({

  render: function() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    )
  }
})

AppRegistry.registerComponent('eastgate', () => eastgate);
