import React, {useContext, useEffect, useState} from "react";

import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { useSelector } from "react-redux";
import { TRootState } from "../redux/initState";

export interface IPosts {
  id: string 
  title: string
  author: string 
  created: number  
  thumbnail: string 
  score: number
  subreddit: string 
}

export function usePostData() {
  const [postData, setPostData] = useState<IPosts[]>([])
  const token = useSelector<TRootState>(state => state.token)

  useEffect(() => {
      axios(`https://oauth.reddit.com/best.json`, {
        headers: {Authorization: `bearer ${token}`}
      })
      .then(res => setPostData(res.data.data.children.map((item: any) => ({...item.data}))))
      .catch(console.log)
  }, [token])

  return [postData]
}
