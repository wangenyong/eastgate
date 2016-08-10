/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import Colors from '../../utils/colorUtil';

const ProfileView = React.createClass({
  render: function() {
    return (
      <ViewContainer
        title="Profile"
        backgroundColor={Colors.primaryColor} >
        <View style={styles.center} >
          <Text>Profile</Text>
        </View>
      </ViewContainer>
    )
  }
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default ProfileView