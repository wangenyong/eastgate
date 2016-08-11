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
  Alert
} from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import Colors from '../../utils/colorUtil';
import Dimensions from '../../utils/DimensionUtil';

const column = 4;

const GridView = React.createClass({
  propTypes: {
    items: PropTypes.array.isRequired
  },

  _onPress(title: string) {
    Alert.alert(title, 'Click!');
  },

  render: function() {
    const _width = Dimensions.size.width/column;
    const boxes = this.props.items.map((elem, index) => {
      let top = Math.floor(index/column)*_width;
      let left = (index%column)*_width;
      return (
        <TouchableOpacity key={elem.key} underlayColor="#eee" style={[styles.touchBox, {top, left}]} onPress={()=>this._onPress(elem.title)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>{elem.title}</Text>
            <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <ViewContainer
        title="Grid"
        backgroundColor={Colors.primaryColor} >
        <View style={{flex: 1}} >
          {boxes}
        </View>
      </ViewContainer>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchBox:{
    width: Dimensions.size.width/column,
    height: Dimensions.size.width/column,
    backgroundColor:"#fff",
    position:"absolute",
    left:0,
    top:0,
    borderWidth: Dimensions.pixel,
    borderColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Dimensions.size.width/column,
    height:Dimensions.size.width/column,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Dimensions.size.width/column,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
});

export default GridView