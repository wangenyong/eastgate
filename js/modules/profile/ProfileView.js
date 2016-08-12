/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/FontAwesome';
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
          <View style={styles.headerContent} >
            <Image source={require('./img/avatar.png')} style={styles.avatar} />
            <Text style={styles.title}>blackWhite</Text>
            <Text style={styles.content}>by <Text style={styles.auther}>Cooper</Text></Text>
            <View style={styles.detailsRow}>
              <View style={styles.counter}>
                <Icon name="heart-o" size={24} color="#333"/>
                <Text style={styles.counterText}> 604 </Text>
              </View>
              <View style={styles.counter}>
                <Icon name="comments-o" size={24} color="#333"/>
                <Text style={styles.counterText}> 31 </Text>
              </View>
              <View style={styles.counter}>
                <Icon name="eye" size={24} color="#333"/>
                <Text style={styles.counterText}> 5586 </Text>
              </View>
            </View>
          </View>
          <View style={styles.separator} />
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
  headerContent: {
    paddingTop: 20,
    alignItems: "center",
    width: dimensions.size.width,
    backgroundColor: "#fff"
  },
  avatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black"
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.accentColor,
    lineHeight: 18,
    marginTop: 10
  },
  content: {
    fontSize: 12
  },
  auther: {
    fontWeight: "900",
    lineHeight: 18
  },
  detailsRow: {
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 10
  },
  counter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  counterText: {
    color: "#333"
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: dimensions.pixel,
    marginVertical: 10,
  },
})

export default ProfileView