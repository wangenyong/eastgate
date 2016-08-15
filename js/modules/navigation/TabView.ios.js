/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import HelloView from '../../components/HelloView';
import HomeView from '../home/HomeView';
import MoreView from '../more/MoreView';
import ProfileView from '../profile/ProfileView';
import GridViewContainer from '../grid/GridViewContainer';
import MovieListViewContainer from '../list/MovieListViewContainer';
import type { Tab } from './NavigationState';
import Colors from '../../utils/colorUtil';

const TabView = React.createClass({
  propTypes: {
    tab: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  },

  onTabSelect(tab: Tab) {
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
  },

  render: function() {
    return (
      <TabBarIOS tintColor={Colors.primaryColor} >
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.props.tab === 'home'}
          onPress={this.onTabSelect.bind(this, 'home')}
          >
          <HomeView />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="List"
          iconName="ios-list-outline"
          selectedIconName="ios-list"
          selected={this.props.tab === 'list'}
          onPress={this.onTabSelect.bind(this, 'list')}
          >
          <MovieListViewContainer navigator={this.props.navigator} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Grid"
          iconName="ios-grid-outline"
          selectedIconName="ios-grid"
          selected={this.props.tab === 'grid'}
          onPress={this.onTabSelect.bind(this, 'grid')}
          >
          <GridViewContainer />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Profile"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected={this.props.tab === 'profile'}
          onPress={this.onTabSelect.bind(this, 'profile')}
          >
          <ProfileView />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="More"
          iconName="ios-more-outline"
          selectedIconName="ios-more"
          selected={this.props.tab === 'more'}
          onPress={this.onTabSelect.bind(this, 'more')}
          >
          <MoreView />
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default TabView;