import React, {useEffect, useState} from "react"

export function useToken() {
  const [tokenStr, setToken] = useState('')
  useEffect(() => {
    window.__token__ ? setToken(window.__token__) : null 
  }, [])

  const token: string = tokenStr
  return  [token]
}
