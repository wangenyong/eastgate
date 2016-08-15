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
        <Image
          style={styles.header}
          source={require('./img/drawer-header.png')}>
        </Image>
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
    justifyContent: 'flex-end',
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
});

export default TabView;