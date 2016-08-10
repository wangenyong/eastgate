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
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform
} from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import Colors from '../../utils/colorUtil';

const HomeView = React.createClass({
  render: function() {
    return (
      <ViewContainer
        title="Home"
        backgroundColor={Colors.primaryColor}
        selectedSectionColor={'white'} >
        <View title="Day 1" style={styles.center} >
          <Text>Day 1</Text>
        </View>
        <View title="Day 2" style={styles.center} >
          <Text>Day 1</Text>
        </View>
        <View title="Day 3" style={styles.center} >
          <Text>Day 1</Text>
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

export default HomeView