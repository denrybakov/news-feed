import React from 'react'

export const stopPropagation = <T extends (e: any) => void>(fn: T) => 
  <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation()
    fn(e)
  }
