/**
 * @flow
 */

'use strict'

import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  TextInput
} from 'react-native';
import dimensions from '../../utils/dimensionUtil';
import Colors from '../../utils/colorUtil';

const SignInView = React.createClass({
  propTypes: {
    authState: PropTypes.object.isRequired,
    skipLogin: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      anim: new Animated.Value(0),
      username: '',
      password: ''
    }
  },

  componentDidMount: function() {
    Animated.timing(this.state.anim, {toValue: 3000, duration: 3000}).start();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityLabel="Skip login"
          accessibilityTraits="button"
          style={styles.skip}
          onPress={this.props.skipLogin} >
          <Animated.Image 
            style={this.fadeIn(2000)}
            source={require('./img/x.png')} />
        </TouchableOpacity>

        <View style={styles.header} /* 顶部组件 */ >
        </View>

        <View style={styles.inputs} /* 用户信息输入组件 */ >
          <View style={styles.inputContainer} /* 用户名 */ >
            <Icon name="ios-person" size={24} color="white" />
            <TextInput
              style={[styles.input, styles.greyFont]}
              placeholder="Username"
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputContainer} /* 密码 */ >
            <Icon name="ios-lock" size={22} color="white" />
            <TextInput
              password={true}
              style={[styles.input, styles.greyFont]}
              placeholder="Password"
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <View style={styles.forgotContainer} /* 忘记密码 */ >
            <Text style={styles.greyFont}>Forgot Password</Text>
          </View>
        </View>
        <View style={styles.signin} /* 登录按钮 */ >

        </View>
        <View style={styles.signup} /* 注册按钮 */ >
          <Text style={styles.greyFont} >Do not have an account?  </Text>
          <TouchableOpacity >
            <Text style={{color:Colors.accentColor}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  },

  fadeIn: function(delay: number, from: number = 0) {
    const {anim} = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 26,
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 25,
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: dimensions.width,
    height: dimensions.height
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .45,
    backgroundColor: 'transparent'
  },
  mark: {
    width: 150,
    height: 150
  },
  signin: {
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: .15
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    flex: .3
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderBottomColor: 'white' ,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 25,
    marginLeft: 10,
    paddingBottom: 0
  },
  forgotContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  greyFont: {
    color: "white"
  },
  whiteFont: {
    color: '#FFF'
  }
})

export default SignInView;
