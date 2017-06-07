/**
 * Created by zorochen on 2017/5/30.
 */
import React , {Component} from 'react'
import {Provider,connect} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {persistStore,autoRehydrate} from 'redux-persist'
import AppReducer from '../reducers'
import {AsyncStorage} from 'react-native'
import AppWithNavigationState from '../AppWithNavigationState'
export default class App extends React.Component {
	store = createStore(AppReducer,undefined,autoRehydrate())
      componentDidMount(){
	      persistStore(this.store,{storage:AsyncStorage})
      }
      render(){
            return (
		  <Provider store={this.store}>
			<AppWithNavigationState/>
		  </Provider>
	    )
      }

}