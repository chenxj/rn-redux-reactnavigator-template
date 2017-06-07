/**
 * Created by zorochen on 2017/5/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {View,Text,Button} from 'react-native'
import {NavigationActions} from 'react-navigation'
class SettingScreen extends Component {
      static navigationOptions = {
           title : 'Setting'
      }
      render(){
	    const { navigate } = this.props.navigation;

	    return (<View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                  <Text>main screen</Text>
                  <Button  title="toB" onPress={e => this.props.toB()}/>
            </View>)
      }
}

const mapStateToProps = (state, ownProps) => ({

})

export default connect(mapStateToProps,dispatch => ({
      toB : () => dispatch(NavigationActions.navigate({routeName:'B'}))
}))(SettingScreen)