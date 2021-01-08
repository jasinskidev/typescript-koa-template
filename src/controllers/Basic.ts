import { BaseContext, DefaultContext } from "koa";

class BasicController {
  public async root(ctx: DefaultContext): Promise<void> {
    ctx.body = 'Welcome to TypeScript REST API';
  }

  public async check(ctx: DefaultContext): Promise<void> {
    ctx.body = 'OK';
  }

  public async robots(ctx: BaseContext): Promise<void> {
    ctx.body = 'User-agent: *\nDisallow: /';
  }
}

export default BasicController;
