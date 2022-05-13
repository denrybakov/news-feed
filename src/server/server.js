import express from 'express'
import ReactDOM from 'react-dom/server'
import { App } from '../App'
import { indexTemplate } from './template'

const PORT_SERVER = 3000

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  )
})

app.listen(PORT_SERVER, () => {
  console.log(`Сервер работает на ${PORT_SERVER}`)
})

