/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import DrawerLayout from '../../components/DrawerLayout';
import HelloView from '../../components/HelloView';
import HomeView from '../home/HomeView';
import MoreView from '../more/MoreView';
import ProfileView from '../profile/ProfileView';
import GridViewContainer from '../grid/GridViewContainer';
import MovieListViewContainer from '../list/MovieListViewContainer';
import MenuItem from '../../components/MenuItem';
import Colors from '../../utils/colorUtil';

const TabView = React.createClass({
  propTypes: {
    tab: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  },

  getChildContext: function() {
    return {
      openDrawer: this.openDrawer
    };
  },

  openDrawer: function() {
    this.refs.drawer.openDrawer();
  },

  onTabSelect: function(tab: Tab) {
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
    this.refs.drawer.closeDrawer();
  },

  renderNavigationView: function() {
    return (
      <View style={styles.drawer}>
        <View style={styles.header} >
          <Image source={require('../profile/img/avatar.png')} style={styles.avatar} />
          <Text style={styles.title} >Cooper</Text>
        </View>
        <MenuItem
          title="Home"
          selected={this.props.tab === 'home'}
          onPress={this.onTabSelect.bind(this, 'home')}
          icon='md-home'
        />
        <MenuItem
          title="List"
          selected={this.props.tab === 'list'}
          onPress={this.onTabSelect.bind(this, 'list')}
          icon='md-list'
        />
        <MenuItem
          title="Grid"
          selected={this.props.tab === 'grid'}
          onPress={this.onTabSelect.bind(this, 'grid')}
          icon='md-grid'
        />
        <MenuItem
          title="Profile"
          selected={this.props.tab === 'profile'}
          onPress={this.onTabSelect.bind(this, 'profile')}
          icon='md-person'
        />
        <MenuItem
          title="More"
          selected={this.props.tab === 'more'}
          onPress={this.onTabSelect.bind(this, 'more')}
          icon='md-more'
        />
      </View>
    )
  },

  renderContent: function() {
    switch (this.props.tab) {
      case 'home':
        return (
          <HomeView />
        );
      case 'list':
        return (
          <MovieListViewContainer navigator={this.props.navigator} />
        );
      case 'grid':
        return (
          <GridViewContainer />
        );
      case 'profile':
        return (
          <ProfileView />
        );
      case 'more':
      return (
        <MoreView navigator={this.props.navigator} />
      );
    }
    throw new Error(`Unknown tab ${this.props.tab}`);
  },

  render: function() {
    return (
      <DrawerLayout
        ref="drawer"
        drawerWidth={290}
        drawerPosition="left"
        renderNavigationView={this.renderNavigationView} >
        <View style={styles.content} key={this.props.tab}>
          {this.renderContent()}
        </View>
      </DrawerLayout>
    )
  }
})

TabView.childContextTypes = {
  openDrawer: React.PropTypes.func
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    height: 160,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: "center"
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
  loginPrompt: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  loginText: {
    fontSize: 12,
    color: '#7F91A7',
    textAlign: 'center',
    marginBottom: 10,
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
    borderWidth: 1,
    borderColor: "black"
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: 'white'
  }
});

export default TabView;