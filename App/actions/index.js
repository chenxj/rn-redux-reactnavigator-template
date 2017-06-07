/**
 * Created by zorochen on 2017/5/31.
 */
import { NavigationActions } from 'react-navigation'

export  const NAV_LOGIN = 'NAV_LOGIN'
export  const NAV_LOGOUT = 'NAV_LOGOUT'
export const logIn = () => (dispatch,getState) =>  {
	const act = NavigationActions.navigate({
	      routeName : 'MAIN',
	})
      return dispatch(act)
}


export const SUB_NAV_JUMP = 'SUB_NAV_JUMP'