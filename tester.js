import {readFileSync} from 'fs'
import speedTest from 'speedtest-net'
import {add} from './store'

const {SPEEDTESTNET_SERVER_ID} = JSON.parse(readFileSync('./config.json'))

export function testSpeed() {
  return new Promise((resolve, reject) => {
    speedTest({ serverId: SPEEDTESTNET_SERVER_ID }) // keep it consistent
      .on('data', (res) => {
        const { client, server, speeds } = res
        console.log(`got data: ${speeds.download} down, ${speeds.upload} up`)
        add({
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
        }).then(() => {
          console.info('saved test run!')
          resolve(res)
        })
      })
      .on('error', err => {
        console.error('error saving test run!', err)
        reject(err)
      })
  })
}