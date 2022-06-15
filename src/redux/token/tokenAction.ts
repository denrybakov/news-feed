import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { TRootState } from '../initState'
import * as TYPES from '../types'

export type SetTokenAction = {
  type: typeof TYPES.SET_TOKEN,
  payload: string
}

export const actionSaveToken: ActionCreator<SetTokenAction> = (payload: string) => ({
  type: TYPES.SET_TOKEN, payload
})

export const saveToken = (): ThunkAction<void, TRootState, unknown, Action<string>> => dispatch => {
  window.__token__ ? dispatch(actionSaveToken(window.__token__)) : null 
}
