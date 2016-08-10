/**
 * @flow
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Platform,
  View,
  Image,
  ToolbarAndroid,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions
} from 'react-native';
import Header from './Header';
import type {Item as HeaderItem} from './Header';
import SegmentedControl from './SegmentedControl';
import ViewPager from './ViewPager';
import * as StyleSheet from '../utils/styleUtil';


type Props = {
  title: string;
  leftItem?: HeaderItem;
  rightItem?: HeaderItem;
  extraItems?: Array<HeaderItem>;
  backgroundColor: string;
  selectedSegment?: number;
  selectedSectionColor?: string;
  stickyHeader?: any;
  onSegmentChange?: (segment: number) => void;
  children?: any;
};

type State = {
  idx: number;
  anim: Animated.Value;
  stickyHeaderHeight: number;
};

class ViewContainer extends Component {
  props: Props;
  state: State;
  handleShowMenu: () => void;
  handleSelectSegment: () => void;

  constructor(props: Props) {
    super(props);
    this.state = {
      idx: this.props.selectedSegment || 0,
      anim: new Animated.Value(0),
      stickyHeaderHeight: 0,
    };

    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
  };

  handleShowMenu() {
    this.context.openDrawer();
  };

  render() {
    const { backgroundColor } = this.props;
    var leftItem = this.props.leftItem;
    if (!leftItem && Platform.OS === 'android') {
      leftItem = {
        title: 'Menu',
        icon: require('./img/hamburger.png'),
        onPress: this.handleShowMenu,
      };
    }

    const segments = [];
    const content = React.Children.map(this.props.children, (child, idx) => {
      segments.push(child.props.title);
      return <View style={{flex: 1}} >{child}</View>;
    });

    let {stickyHeader} = this.props;
    if (segments.length > 1) {
      stickyHeader = (
        <View>
          <SegmentedControl
            values={segments}
            selectedIndex={this.state.idx}
            selectionColor={this.props.selectedSectionColor}
            style={[{backgroundColor}]}
            onChange={this.handleSelectSegment}
          />
          {stickyHeader}
        </View>
      );
    }

    // TODO: Bind to ViewPager animation
    const backgroundShift = segments.length === 1
      ? 0
      : this.state.idx / (segments.length - 1);

    return (
      <View style={styles.container} >
        <View style={styles.headerWrapper}>
          <Header
            title={this.props.title}
            leftItem={leftItem}
            rightItem={this.props.rightItem}
            extraItems={this.props.extraItems}
            style={[{backgroundColor}]} >
          </Header>
          {stickyHeader}
        </View>
        <ViewPager
          count={segments.length}
          selectedIndex={this.state.idx}
          onSelectedIndexChange={this.handleSelectSegment}>
          {content}
        </ViewPager>
      </View>
    )
  }

  handleSelectSegment(idx: number) {
    if (this.state.idx !== idx) {
      const {onSegmentChange} = this.props;
      this.setState({idx}, () => onSegmentChange && onSegmentChange(idx));
    }
  }

  renderFixedStickyHeader(stickyHeader: ?any) {
    return Platform.OS === 'ios'
      ? <View style={{height: this.state.stickyHeaderHeight}} />
      : stickyHeader;
  }
}

ViewContainer.contextTypes = {
  openDrawer: React.PropTypes.func
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    android: {
      elevation: 2,
      backgroundColor: 'transparent',
      // FIXME: elevation doesn't seem to work without setting border
      borderRightWidth: 1,
      marginRight: -1,
      borderRightColor: 'transparent',
    }
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  parallaxText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
});

export default ViewContainer