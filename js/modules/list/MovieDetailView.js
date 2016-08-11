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
import Header from '../../components/Header';
import Colors from '../../utils/colorUtil';
import BackIcon from '../../components/BackIcon';

const MovieDetailView = React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  },  


  dismiss() {
    this.props.navigator.pop();
  },

  render: function() {
    return (
      <View style={styles.container} >
        <Header 
          leftItem={{
            layout: 'icon',
            title: 'Back',
            icon: BackIcon,
            onPress: this.dismiss
          }}
          title={this.props.title}
          style={{backgroundColor: Colors.primaryColor}} />
        <View style={styles.center} >
          <Text>{this.props.title}</Text>
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

export default MovieDetailView