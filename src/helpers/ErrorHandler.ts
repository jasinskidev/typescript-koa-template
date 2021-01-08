import Application from "koa";

class ErrorHandler {
  constructor(private server: Application) {}

  public setup(): void {
    this.server.on('error', (err) => {
      console.error(err.message);
    })
  }
}

export default ErrorHandler;
