import { testSpeed } from './tester'
import { start } from './server'
// import { connect, disconnect } from './store'

start()

  // start server
  .catch(err => console.error('error connecting to mongo', err))
  .then(() => console.info('started server'))

  // init poll
  .then(poll)

// poll every 1 min
function poll () {
  testSpeed()
    .then(() => console.info('got results!'))
    .then(() => setTimeout(poll, 10*1000))
}


// process.on('exit', disconnect)