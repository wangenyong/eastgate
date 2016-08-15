/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';
import Colors from '../../utils/colorUtil';
import ViewContainer from '../../components/ViewContainer';
import SettingIcon from '../../components/SettingIcon';

const MessageView = React.createClass({
  propTypes: {
    navigator: PropTypes.object.isRequired
  },  

  jumpToSetting: function() {
    this.props.navigator.push({
      name: 'Setting'
    })
  },

  render: function() {
    var rightItem = {
      title: '设置',
      icon: SettingIcon,
      layout: 'icon',
      onPress: this.jumpToSetting
    }
    return (
      <ViewContainer
        title="More"
        rightItem={rightItem}
        backgroundColor={Colors.primaryColor} >
        <View style={styles.center} > 
          <Text>More</Text>
        </View>
      </ViewContainer>
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

export default MessageView;