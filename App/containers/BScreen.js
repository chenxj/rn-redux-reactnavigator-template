/**
 * Created by zorochen on 2017/5/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'
class BScreen extends Component {
      render(){
	    return (<View style={{flex:1,marginTop:30}}>
		  <Text>B screen</Text>
	    </View>)
      }
}

const mapStateToProps = (state, ownProps) => ({

})

export default connect(mapStateToProps,{

})(({dispatch,nav}) => ( <BScreen navigation={addNavigationHelpers({dispatch,state:nav})} />))