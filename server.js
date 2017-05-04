import jsonServer from 'json-server'
const server = jsonServer.create()
//const router = jsonServer.router('mock/index.js')
import m from './mock/index.js'
const middlewares = jsonServer.defaults()
const port = process.env.API_PORT || 5000

//const m = mock()
console.log(m)

const router = jsonServer.router(m)
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})
