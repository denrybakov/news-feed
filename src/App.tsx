import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'

import { Header } from './shared/Header'



export const AppComponent = (): JSX.Element => {
  return (
    <>
      <Header />
    </>
  )
}

export const App = hot(() => <AppComponent />)
