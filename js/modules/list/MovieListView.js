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
  ListView,
  Image
} from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import Colors from '../../utils/colorUtil';

const MovieListView = React.createClass({
  propTypes: {
    dataSource: PropTypes.object.isRequired
  },  

  _renderItem(item: any) {
    return (
      <TouchableOpacity >
        <View style={styles.row}>
          <Image source={{uri: item.img}} style={{width: 120, height: 80}} />
          <Text numberOfLines={4} style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  },

  render: function() {
      const contentView = <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) => this._renderItem(rowData)}
        contentInset={{top:0, left:0, bottom: 60, right: 0}} />
      return (
        <ViewContainer
          title="List"
          backgroundColor={Colors.primaryColor} >
          <View style={{flex: 1}} >
            {contentView}
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
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    marginLeft: 10,
  },
  description: {
    flex: 1,
    height: 70,
    marginLeft: 10,
  }
})

export default MovieListView