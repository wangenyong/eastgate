/**
 * @flow
 */

'use strict'

import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Touchable from './Touchable';
import Colors from '../utils/colorUtil';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform
} from 'react-native';

const MenuItem = React.createClass({
  propTypes: {
    icon: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    badge: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      badge: false
    }
  },

  render: function() {
    var iconColor = this.props.selected? Colors.primaryColor : '#7F91A7';
    var selectedTitleStyle = this.props.selected && styles.selectedTitle;
    var badge;

    if (this.props.badge) {
      badge = (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {this.props.badge}
          </Text>
        </View>
      );
    }

    return (
      <Touchable onPress={this.props.onPress}>
        <View style={styles.container}>
          <Icon style={styles.icon} name={this.props.icon} color={iconColor} size={20} />
          <Text style={[styles.title, selectedTitleStyle]}>
            {this.props.title}
          </Text>
          {badge}
        </View>
      </Touchable>
    );   
  }

})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
    width: 24
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: '#7F91A7',
  },
  selectedTitle: {
    color: '#032250',
  },
  badge: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: 'white',
  },
});

export default MenuItem