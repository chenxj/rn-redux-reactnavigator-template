/**
 * Created by zorochen on 2017/5/31.
 */
import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'
import {AppNavigator,NestTab,AppRoute} from '../AppWithNavigationState'
import * as ActionTypes from '../actions'
const initNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))
const initMainNavState = AppRoute.router.getStateForAction(AppRoute.router.getActionForPathAndParams('Home'))
const initSubNavState = NestTab.router.getStateForAction(NestTab.router.getActionForPathAndParams('A'))
/*
const initNavState = {
      index : 0,
      routes : [
            {
                  key : 'initA',
                  routeName : 'Main',
                  index : 0,
                  routes : [
                        { key : 'initAA',routeName : 'Home'},
			{ key : 'initAB' ,routeName : 'Setting'},
                  ]
            },
	    { key : 'initB',routeName : 'Login'},
      ]
}
*/
const nav = (state = initNavState, action) => {
      console.log('in nav the act : ')
      console.log(action)
      if(action.type === ActionTypes.NAV_LOGIN){
            // return AppNavigator.router.getStateForAction(NavigationActions.back(),state)
      }
      return AppNavigator.router.getStateForAction(action,state) || initNavState

}
const mainNav = (state = initMainNavState,action) => {

      return AppRoute.router.getStateForAction(action,state) || initMainNavState
}
const subNav = (state = initSubNavState,action) => {
      return NestTab.router.getStateForAction(action,state) || initSubNavState


}

const rootReducer = combineReducers({
      nav,
      subNav,
      mainNav
})

export default rootReducer