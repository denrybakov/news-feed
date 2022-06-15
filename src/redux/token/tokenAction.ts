import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { TRootState } from '../initState'
import * as TYPES from '../types'

export type SetTokenAction = {
  type: typeof TYPES.SET_TOKEN,
  payload: string | undefined
}

export const actionSaveToken: ActionCreator<SetTokenAction> = (payload: string) => ({
  type: TYPES.SET_TOKEN, payload
})

export const setToken = (): ThunkAction<void, TRootState, unknown, Action<string>> => dispatch => {
  window.__token__ ? dispatch(actionSaveToken(window.__token__)) : null 
}
