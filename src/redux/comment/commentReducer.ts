import {ReplyCommentAction, UpdateCommentAction} from './commentAction'
import { initState } from '../initState'
import * as TYPES from '../types'

export type CommentActions = UpdateCommentAction & ReplyCommentAction

export const commentReducer = (state = initState.commentText, {type, payload}: CommentActions) => {
  switch(type) {
    case TYPES.UPDATE_COMMENT:
      return payload
    case TYPES.REPLY_COMMENT:
      return payload
    default: 
      return state 
  }
}
