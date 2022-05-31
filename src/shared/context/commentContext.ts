import React, {createContext} from 'react'

type TCommentContext = {
  value: string 
  onChange: (value: string) => void
}

export const commentContext = createContext<TCommentContext>({
  value: '',
  onChange: () => {}
})
