import { createContext, ReactNode } from "react";
import { IPosts, usePostData } from "../../hooks/usePostData";

export const postsContext = createContext<IPosts[]>([])

export function PostsContextProvider({ children }: { children: ReactNode }) {
  const [posts] = usePostData()
  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  )
}
