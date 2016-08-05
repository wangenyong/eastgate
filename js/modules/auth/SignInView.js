/**
 * @flow
 */

'use strict'

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const SignInView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}><Text>SignIn:)</Text></View>
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

export default SignInView;
