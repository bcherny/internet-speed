import express from 'express'
import {getAll} from './localStore'

export function start () {
  return new Promise(resolve => {
    express()
      .get('/times', (req, res) => {
        getAll()
          .then(rs => res.send({ data: rs }))
          .catch(err => res.status(500).send(err))
      })
      .get('*', express.static('./client'))
      .get('ts/*', express.static('./client/ts'))
      .get('ts/interfaces/*', express.static('./client/ts/interfaces'))
      .listen(1337, resolve)
  })

}