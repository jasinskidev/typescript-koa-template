import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import BasicRouter from './routes/Basic';
import ErrorHandler from './helpers/ErrorHandler';
import DatabaseClient from './clients/database';
import { ServerConfig } from '../config/server.d';

class Server extends Koa {
  private config: ServerConfig;
  
  constructor(config: ServerConfig) {
    super();
    this.config = config;
    this.setupMiddlewares();
    this.setupDatabase();
    this.setupErrorHandling();
    this.configureRouting();
  }

  private setupDatabase(): void {
    const databaseClient = new DatabaseClient(this.config.connectionUrl);
    databaseClient.setupDatabase();
  }

  private configureRouting(): void {
    const basicRoutes = new BasicRouter();
    this.use(basicRoutes.routes());
  }

  private setupErrorHandling(): void {
    const errorHandler = new ErrorHandler(this);
    errorHandler.setup();
  }

  private setupMiddlewares(): void {
    this.use(logger());
    this.use(bodyParser());
  }

  public start(): void {
    this.listen(this.config.port);
    console.log(`Server started on port ${this.config.port}`);
  }
}

export default Server;