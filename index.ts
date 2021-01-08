import Server from './src/Server';
import config from './config/server';

const server = new Server(config)
server.start();