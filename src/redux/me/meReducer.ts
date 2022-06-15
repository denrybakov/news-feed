import { Reducer } from 'react'
import { initState } from '../initState'
import { IUserData, MeRequestSuccessAction, MeRequestAction, MeRequestErrorAction } from './meAction'
import * as TYPES from '../types'

export type MeState = {
  loading?: boolean,
  error?: string, 
  data?: IUserData | undefined
}

export type MeAction = MeRequestAction & MeRequestSuccessAction & MeRequestErrorAction

export const meReducer: Reducer<MeState, MeAction> = (state = initState.me, {type, payload}) => {
  switch(type) {
    case TYPES.ME_REQUEST:
      return {...state, loading: true}
    case TYPES.ME_REQUEST_SUCCESS:
      return {...state, data: payload, loading: false}
    case TYPES.ME_REQUEST_ERROR:
      return {...state, error: payload, loading: false}
    default: 
      return state
  }
}
