/**
 * Created by zorochen on 2017/5/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'
class AScreen extends Component {
      render(){
	    return (<View style={{flex:1,backgroundColor:'red'}}>
		  <Text style={{height:80,marginTop:120}}>A screen</Text>
	    </View>)
      }
}

const mapStateToProps = (state, ownProps) => ({

})

export default connect(mapStateToProps,{

})(({dispatch,nav}) => ( <AScreen navigation={addNavigationHelpers({dispatch,state:nav})} />))