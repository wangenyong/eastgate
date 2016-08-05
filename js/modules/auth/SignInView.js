/**
 * @flow
 */

'use strict'

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const SignInView = React.createClass({
  propTypes: {
    authState: PropTypes.object.isRequired,
    skipLogin: PropTypes.func.isRequired
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityLabel="Skip login"
          accessibilityTraits="button"
          style={styles.skip}
          onPress={this.props.skipLogin} >
          <Image source={require('./img/x.png')} />
        </TouchableOpacity>
        <Text>SignIn:)</Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  }
})

export default SignInView;
