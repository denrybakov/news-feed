import { initState } from "../initState";
import { SetTokenAction } from "./tokenAction";
import * as TYPES from '../types'


export const tokenReducer = (state = initState.token, {type, payload}: SetTokenAction) => {
  switch(type) {
    case TYPES.SET_TOKEN:
      return payload
    default: 
      return state
  }
}
