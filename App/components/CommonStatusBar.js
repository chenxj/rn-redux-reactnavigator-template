/**
 * Created by zorochen on 2017/6/8.
 */
import {StatusBar} from 'react-native'
import React, {Component, PropTypes} from 'react'

export default class CommonStatusBar extends Component {

      render(){
            return (
                  <StatusBar
			backgroundColor={'blue'}
			translucent={true}/>
	    )
      }
}