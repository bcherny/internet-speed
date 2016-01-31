import { testSpeed } from './tester'
import { start } from './server'
import { connect, disconnect } from './store'

connect()

  // start server
  .then(start, err => console.error('error connecting to mongo', err))
  .then(() => console.info('started server'))

  // initial poll
  .then(testSpeed)

  // poll every 1 min
  .then(() => setTimeout(testSpeed, 60*1000))


process.on('exit', disconnect)