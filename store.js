import {readFileSync} from 'fs'
import mongoose from 'mongoose'

const {MONGO_USER, MONGO_PASS, MONGO_URL, MONGO_URL2, MONGO_DB} = JSON.parse(readFileSync('./config.json'))
const url = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL},${MONGO_URL2}/${MONGO_DB}`

const TestRun = mongoose.model('TestRun', new mongoose.Schema({
  speed_down: 'number',
  speed_up: 'number',
  client_ip: 'string',
  // client_lat: 'number',
  // client_lng: 'number',
  server_host: 'string',
  server_lat: 'number',
  server_lng: 'number',
  server_id: 'number',
  server_ping: 'number',
  time: 'string'
}))

export function connect () {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, {
      replset: {
        rs_name: 'set-54c2ac53189249534c000887',
        socketOptions: {
          keepAlive: 1
        }
      },
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    }, function (err, res) {
      if (err) reject(err)
      else resolve()
    })
  })
}

export function disconnect() {
  mongoose.disconnect()
}

export function getAll () {
  return new Promise((resolve, reject) => {
    TestRun.find({}, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

export function add (data) {
  return new Promise((resolve, reject) => {
    new TestRun(data).save(err => {
      if (err) reject(err)
      else resolve()
    })
  })
}