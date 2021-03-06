import * as http from 'http';
import App from "./app";
import * as ioServer from 'socket.io'

const port = 3000;
const server = http.createServer(App);
const io = ioServer(server)
App.set('port', port)
server.listen(port);
server.on('listening', onListening)

function onListening(): void {
  console.log(`Listening to port ${port}`)
}




// can also use below

// server.listen(port);
// server.on('listening', () => {
//   console.log(`Listening to port ${port}`)
// })

// or 

// server.listen(port, () => {
//     console.log(`Listening to port ${port}`)
// });