import { combineReducers } from "redux";
import { commentReducer } from "./comment/commentReducer";
import { meReducer } from "./me/meReducer";
import { tokenReducer } from "./token/tokenReducer";

export const rootReducer = combineReducers({
  token: tokenReducer,
  commentText: commentReducer,
  me: meReducer
})
