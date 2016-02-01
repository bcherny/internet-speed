import {readFileSync, writeFileSync} from 'fs'

function getStore () {
  return JSON.parse(readFileSync('./STORE.json'))
}

function setStore (data) {
  writeFileSync('./STORE.json', JSON.stringify(data, null, 2))
}

export function getAll () {
  return Promise.resolve(getStore())
}

export function add (data) {
  setStore(getStore().concat(data))
  return Promise.resolve()
}