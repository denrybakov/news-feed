import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'



export const AppComponent = (): JSX.Element => {
  return (
    <header>
      Hello News Feed
    </header>
  )
}

export const App = hot(() => <AppComponent />)
