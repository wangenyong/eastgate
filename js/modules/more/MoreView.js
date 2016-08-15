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

const MessageView = React.createClass({

  render: function() {
    return (
      <ViewContainer
        title="More"
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