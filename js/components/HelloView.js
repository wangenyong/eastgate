/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';
import Colors from '../utils/colorUtil';
import Header from './Header';

const HelloView = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Header 
          title={'Message'}
          style={{backgroundColor: Colors.primaryColor}} />
        <View style={styles.center} > 
          <Text>Hello:)</Text>
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HelloView;
