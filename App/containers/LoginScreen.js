/**
 * Created by zorochen on 2017/5/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {View,Text,Button} from 'react-native'
import {logIn} from '../actions/'
import {NavigationActions} from 'react-navigation'
import CommonStatusBar from '../components/CommonStatusBar'
class LoginScreen extends Component {
      render(){
	    const toMain = () => {
		  const act = NavigationActions.navigate({
			routeName : 'Main',
		  })
		  this.props.navigation.dispatch(act)
	    }
	    return (<View>
		  <CommonStatusBar/>
		  <Text>login screen</Text>
		  <Button  title="login in" onPress={toMain}/>
	    </View>)
      }
}

const mapStateToProps = (state, ownProps) => ({

})

export default connect(mapStateToProps,{
      logIn
})(LoginScreen)