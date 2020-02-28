import { RouterContext } from 'koa-router';

export async function healthCheck(ctx: RouterContext): Promise<void> {
    ctx.body = {
        status: 'Its working!',
    };
}