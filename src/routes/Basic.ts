import Router from 'koa-router';
import BasicController from '../controllers/Basic';

class BasicRoutes extends Router {
  private controller;

  constructor() {
    super();
    this.controller = new BasicController();
    this.prepareRoutes();
  }

  private prepareRoutes() {
    this
      .get('/', this.controller.root)
      .get('/check', this.controller.check)
      .get('/robots.txt', this.controller.robots);
  }
}

export default BasicRoutes;
