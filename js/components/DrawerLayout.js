'use strict'

import React, { Component, PropTypes } from 'react';
import {
  DrawerLayoutAndroid,
} from 'react-native';

const DrawerLayout = React.createClass({
  _drawer: DrawerLayoutAndroid,

  render: function() {
    const {drawerPosition, ...props} = this.props;
    const {Right, Left} = DrawerLayoutAndroid.positions;
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => this._drawer = drawer}
        {...props}
        drawerPosition={drawerPosition === 'right' ? Right : Left}
      />
    )
  },

  closeDrawer: function() {
    this._drawer && this._drawer.closeDrawer();
  },

  openDrawer: function() {
    this._drawer && this._drawer.openDrawer();
  }  
})

export default DrawerLayout