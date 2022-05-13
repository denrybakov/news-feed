import React from 'react'

export const pickFromCurrentTarget = <T extends HTMLElement>() => {
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key])
}


export const getValue = pickFromCurrentTarget<HTMLInputElement>()('value')
export const getChecked = pickFromCurrentTarget<HTMLInputElement>()('checked')
