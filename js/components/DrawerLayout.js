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
        onDrawerOpen={this.onDrawerOpen}
        onDrawerClose={this.onDrawerClose}
      />
    )
  },

  handleBackButton: function() {
    this.closeDrawer();
    return true;
  },

  onDrawerOpen() {
    this.context.addBackButtonListener(this.handleBackButton);
    this.props.onDrawerOpen && this.props.onDrawerOpen();
  },

  onDrawerClose() {
    this.context.removeBackButtonListener(this.handleBackButton);
    this.props.onDrawerClose && this.props.onDrawerClose();
  },

  closeDrawer: function() {
    this._drawer && this._drawer.closeDrawer();
  },

  openDrawer: function() {
    this._drawer && this._drawer.openDrawer();
  }  
})

DrawerLayout.contextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

export default DrawerLayout