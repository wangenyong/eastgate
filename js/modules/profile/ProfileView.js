/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import Colors from '../../utils/colorUtil';
import dimensions from '../../utils/dimensionUtil';

const ProfileView = React.createClass({
  render: function() {
    return (
      <ViewContainer
        title="Profile"
        backgroundColor={Colors.primaryColor} >
        <View style={styles.containers} >
          <Image source={require('./img/avatar.jpg')} style={styles.avatar} />
        </View>
      </ViewContainer>
    )
  }
})

const styles = StyleSheet.create({
  containers: {
    flex: 1
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    position: "absolute",
    top: 20,
    left: dimensions.size.width / 2 - 40,
    borderWidth: 2,
    borderColor: "#fff"
  },
})

export default ProfileView