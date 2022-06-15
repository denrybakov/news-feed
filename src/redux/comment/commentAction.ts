import { ActionCreator } from 'redux'
import * as TYPES from '../types'

export type UpdateCommentAction = {
  type: typeof TYPES.UPDATE_COMMENT,
  payload: string 
}

export type ReplyCommentAction = {
  type: typeof TYPES.REPLY_COMMENT,
  payload: string 
}

export const updateComment: ActionCreator<UpdateCommentAction> = (payload: string) => ({
  type: TYPES.UPDATE_COMMENT, payload
})

export const replyComment: ActionCreator<ReplyCommentAction> = (payload: string) => ({
  type: TYPES.REPLY_COMMENT, payload
})
