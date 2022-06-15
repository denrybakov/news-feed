import { MeState } from "./me/meReducer"

export type TRootState = {
  token: string
  commentText: string 
  me: MeState
}

export const initState: TRootState = {
  token: '',
  commentText: '',
  me: {
    loading: false,
    error: '',
    data: {}
  }
}
