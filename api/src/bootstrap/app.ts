import * as Koa from 'koa';
import middlewares from '../middlewares';
import { connectDB } from './database';
export const app = new Koa();
app.use(middlewares);

export function listen(port = 3000): void {
    connectDB().then(() =>
        app.listen(port, () => {
            console.log(`listening to port ${port}`);
        }),
    );
}
