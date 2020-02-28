import * as compose from 'koa-compose';
import router from './router';
import errorhandlers from './errorHandler';
import * as bodyParser from 'koa-bodyparser';
const cors = require('@koa/cors');
export default compose([
    cors('http://localhost:3001'),
    errorhandlers,
    bodyParser({
        enableTypes: ['text', 'json', 'form'],
        strict: true,
    }),
    router,
]);
