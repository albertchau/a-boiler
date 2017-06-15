const merge = require('lodash/merge')

const mockApiPort = process.env.API_PORT || 5000
const devApiPort = process.env.API_PORT || 6000

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
  test: {},
  development: {
    apiUrl: `http://0.0.0.0:${devApiPort}`,
  },
  mockDev: {
    apiUrl: `http://0.0.0.0:${mockApiPort}`,
  },
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(config.all, config[config.all.env])
