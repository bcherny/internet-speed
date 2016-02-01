import {readFileSync} from 'fs'
import speedTest from 'speedtest-net'
import {add} from './localStore'

const {SPEEDTESTNET_SERVER_ID} = JSON.parse(readFileSync('./config.json'))

export function testSpeed() {
  console.log('testSpeed')
  return new Promise((resolve, reject) => {
    speedTest({ serverId: SPEEDTESTNET_SERVER_ID }) // keep it consistent
      .on('data', (res) => {
        const { client, server, speeds } = res
        console.log(`got data: ${speeds.download} down, ${speeds.upload} up`)
        add({
          time: new Date().toISOString(),
          speed_down: speeds.download,
          speed_up: speeds.upload,
          client_ip: client.ip,
          client_lat: client.lat,
          client_lng: client.lon,
          server_host: server.host,
          server_lat: server.lat,
          server_lng: server.lon,
          server_id: server.id,
          server_ping: server.ping
        }).then(resolve)
      })
      .on('error', err => {
        if (err.code === 'ETIMEDOUT') {
          console.log(`connection timed out!`)
          add({
            time: new Date().toISOString(),
            speed_down: 0,
            speed_up: 0,
            client_ip: null,
            client_lat: null,
            client_lng: null,
            server_host: null,
            server_lat: null,
            server_lng: null,
            server_id: null,
            server_ping: null
          }).then(resolve)
        } else {
          console.error('error saving test run!', err)
          reject(err)
        }
      })
  })
}