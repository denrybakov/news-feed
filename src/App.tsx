import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { CardsList } from './shared/CardsList'
import { Content } from './shared/Content'

import { Header } from './shared/Header'
import { Layout } from './shared/Layout'
import { tokenContext } from './shared/context/tokenContext'

import './App.global.css'
import { useToken } from './hooks/useToken'
import { PostsContextProvider } from './shared/context/postsContext'
import { commentContext } from './shared/context/commentContext'


export const AppComponent = (): JSX.Element => {
  const [commentValue, setCommentValue] = useState<string>('')
  const [token] = useToken()
  const { Provider } = tokenContext
  const CommentContext = commentContext.Provider

  return (
    <CommentContext value={{
      value: commentValue,
      onChange: setCommentValue
    }}>
      <Provider value={token}>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </Provider>
    </CommentContext>

  )
}

export const App = hot(() => <AppComponent />)
