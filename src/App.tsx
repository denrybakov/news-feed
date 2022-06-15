import { hot } from 'react-hot-loader/root'
import { CardsList } from './shared/CardsList'
import { Content } from './shared/Content'
import { Header } from './shared/Header'
import { Layout } from './shared/Layout'

import { Provider } from 'react-redux'
import { PostsContextProvider } from './shared/context/postsContext'
import { store } from './redux/store'

import './App.global.css'

export const AppComponent = (): JSX.Element => {
  return (
    <Provider store={store}>
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
