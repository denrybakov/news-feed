import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { tokenContext } from '../shared/context/tokenContext'

interface IUserData {
  name?: string
  iconImg?: string
}

export function useUserData(): IUserData[] {
  const [data, setData] = useState<IUserData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    if (token && token !== 'undefined') {
      axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` }
      })
        .then(res => {
          const userData = res.data
          console.log('userData = ', userData)
          setData({ name: userData.name, iconImg: userData.snoovatar_img })

        })
        .catch(console.log)
    }
  }, [token])

  console.log('data = ', data)

  return [data]
}
