import { Dispatch } from 'react'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { TRootState } from '../initState'
import axios from 'axios'
import * as TYPES from '../types'

export interface IUserData {
  name?: string
  iconImg?: string
}

export type MeRequestAction = {
  type: typeof TYPES.ME_REQUEST,
  payload: string   
}

export type MeRequestSuccessAction = {
  type: typeof TYPES.ME_REQUEST_SUCCESS,
  payload: IUserData 
}

export type MeRequestErrorAction = {
  type: typeof TYPES.ME_REQUEST_ERROR,
  payload: string 
}

export const actionMeRequest: ActionCreator<MeRequestAction> = (payload: string) => ({
  type: TYPES.ME_REQUEST, payload
})

export const actionMeRequestSuccess: ActionCreator<MeRequestSuccessAction> = (payload: IUserData) => ({
  type: TYPES.ME_REQUEST_SUCCESS, payload
})

export const actionMeRequestError: ActionCreator<MeRequestErrorAction> = (payload: string) => ({
  type: TYPES.ME_REQUEST_ERROR, payload
})

export const meRequest = (): ThunkAction<void, TRootState, unknown, Action<string>> => (dispatch: Dispatch<any>, getState) => {
  const token = getState().token 
  dispatch(actionMeRequest())
  axios('https://oauth.reddit.com/api/v1/me', {
    headers: {Authorization: `bearer ${token}`}
  })
    .then(res => 
      dispatch(actionMeRequestSuccess({
        name: res.data.name,
        iconImg: res.data.snoovatar_img
      })))
    .catch(err => dispatch(actionMeRequestError(String(err))))
}
