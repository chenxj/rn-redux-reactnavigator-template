/**
 * Created by zorochen on 2017/5/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
import {TabRouter,TabNavigator,addNavigationHelpers} from 'react-navigation'
import SettingScreen from './SettingScreen'
import HomeScreen from './HomeScreen'

const Tabs = TabNavigator({
      Home    : {screen : HomeScreen},
      Setting : {screen: SettingScreen}
},{
      tabBarPosition  : 'bottom',
      headerMode : 'none'
})

class MainScreen extends Component {
      render(){
            const {navigation} = this.props

            return (<View style={{flex:1}}>
		  <Tabs style={{flex:1}} />
            </View>)
      }
}

const mapStateToProps = (state, ownProps) => {

      return {}

}

export default connect(mapStateToProps,{

})((obj) => {
  return (
        <MainScreen navigation={navigation} />

  )
}
)