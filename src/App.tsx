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


export const AppComponent = (): JSX.Element => {
  const [token] = useToken()
  const { Provider } = tokenContext
  return (
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
  )
}

export const App = hot(() => <AppComponent />)
