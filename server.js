import express from 'express'
import {getAll} from './store'

export function start () {
  return new Promise(resolve => {
    express()
      .get('/times', (req, res) => {
        getAll()
          .then(rs => res.send(rs))
          .catch(err => res.status(500).send(err))
      })
      .listen(1337, resolve)
  })

}