import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { CardsList } from './shared/CardsList'
import { Content } from './shared/Content'

import { Header } from './shared/Header'
import { Layout } from './shared/Layout'

import './App.global.css'
import { GenericList } from './shared/GenericList'
import { generateId, generateRandomString } from './utils/react/generateRandomIndex'
import { merge } from './utils/js/merge'

const LIST = [
  { text: 'some' },
  { text: 'other some' },
  { text: 'other some 2' },
].map(generateId)



export const AppComponent = (): JSX.Element => {
  const [List, setList] = useState(LIST)

  const removeItemClick = (id: string) => {
    setList(List.filter(item => item.id !== id))
  }

  const addItemClick = () => {
    setList(List.concat(generateId({ text: generateRandomString() })))
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={addItemClick}>Add test</button>
        {/* <GenericList list={List.map(merge({ onClick: removeItemClick }))} /> */}
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />)
