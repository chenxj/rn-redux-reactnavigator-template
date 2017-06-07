/**
 * Created by zorochen on 2017/5/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'
import {NestTab} from '../AppWithNavigationState'

class HomeScreen extends Component {

      render(){
            const {navigation} = this.props

	    console.log('the navigation')
	    console.log(navigation)
            return (
                  <View style={{flex:1,backgroundColor:'red'}}>
			 <NestTab navigation={navigation} style={{flex:1}} />
                  </View>
            )
      }
}

const mapStateToProps = (state, ownProps) => {
      return {
            subNav : state.subNav
      }
}

export default connect(mapStateToProps)(
      ({dispatch,subNav}) => ( <HomeScreen navigation={addNavigationHelpers({dispatch,state : subNav})} />)
)