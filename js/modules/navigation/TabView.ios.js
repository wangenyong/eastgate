/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
   StyleSheet,
   Text,
   View,
   TabBarIOS
} from 'react-native';
import HelloView from '../../components/HelloView';

const TabView = React.createClass({
  propTypes: {
    navigationState: PropTypes.object.isRequired,
    switchTab: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  },
  render: function() {
    return (
      <View style={styles.container}><Text>Hello TabView:)</Text></View>
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

export default TabView;