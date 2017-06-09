/**
 * Created by zorochen on 2017/5/31.
 */
import {connect} from 'react-redux'
import {StackNavigator,addNavigationHelpers,TabRouter,TabNavigator} from 'react-navigation'
import LoginScreen from './containers/LoginScreen'
import MainScreen from './containers/MainScreen'
import SettingScreen from './containers/SettingScreen'
import HomeScreen from './containers/HomeScreen'
import AScreen from './containers/AScreen'
import BScreen from './containers/BScreen'
import React, {Component, PropTypes} from 'react'

export const NestTab = TabNavigator({
      A : {screen : AScreen},
      B : {screen : BScreen},
},{
      initialRouteName : 'B',
      tabBarPosition : 'top',
      headerMode : 'none'
})

export const AppRoute = TabNavigator({
      Home    : {
            screen : HomeScreen
      },
      Setting : {
            screen: SettingScreen}
      },{
      tabBarPosition    : 'bottom',
      headerMode        : 'none'
})

const AppRouteWithState = connect(state => ({
      mainNav: state.mainNav
}))( ({dispatch,mainNav}) => (
      <AppRoute navigation={addNavigationHelpers({dispatch,state:mainNav})}/>
))
const InitRoute = StackNavigator({
      Main : {
            screen : AppRouteWithState
      },
      Login : {
            screen : LoginScreen
      },

},{
      initialRouteName : 'Login',
      headerMode : 'none'

})


export default  connect(state =>({
      nav : state.nav
}))( ({dispatch,nav}) => (
     <InitRoute navigation={addNavigationHelpers({dispatch,state:nav})}/>
))

export const AppNavigator = InitRoute

