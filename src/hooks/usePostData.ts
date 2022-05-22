import React, {useContext, useEffect, useState} from "react";

import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";

export interface IPosts {
  id: string 
  title: string
  author: string 
  created: number  
  thumbnail: string 
  score: number 
}

export function usePostData() {
  const [postData, setPostData] = useState<IPosts[]>([])
  const token = useContext(tokenContext)

  useEffect(() => {
    axios('https://www.reddit.com/best.json')
      .then(res => {
        let posts = res.data.data.children.map((item: any) => ({...item.data}))
        setPostData(posts)
        console.log('post data = ', posts)
      })
      .catch(console.log)
  }, [token])

  return [postData]
}
