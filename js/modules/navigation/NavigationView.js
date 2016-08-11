/**
 * @flow
 */

'use strict'

import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Navigator,
  Platform
} from 'react-native';
import TabViewContainer from './TabViewContainer';
import MovieDetailView from '../list/MovieDetailView';

const NavigationView = React.createClass({

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
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
    return <TabViewContainer navigator={navigator} />
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NavigationView;
