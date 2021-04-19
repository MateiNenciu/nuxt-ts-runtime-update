import {ServerMiddleware} from '@nuxt/types'

const setHeaders: ServerMiddleware =  function setHeaders(req, res, next) {
  res.setHeader('X-Frame-Options', 'sameorigin')
  res.setHeader('Content-Security-Policy', 'frame-ancestors https://*.anything.ro;')
  next()
}

export default setHeaders
