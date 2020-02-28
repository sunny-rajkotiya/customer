import { Context } from 'koa';
import { AppError, preprareError } from '../utils/errorHandlers';

export default async function(ctx: Context, next: Function): Promise<void> {
    try {
        await next();
    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            error: 'unknown error',
            debug: {},
        };
        if (e instanceof Error) {
            ctx.body = preprareError(AppError.UNKNOWN_ERROR, e.message);
        }
    }
}
