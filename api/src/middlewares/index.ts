import * as compose from 'koa-compose';
import router from './router';
import errorhandlers from './errorHandler';
import * as bodyParser from 'koa-bodyparser';
import * as staticServe from 'koa-static'
const cors = require('@koa/cors')
import {resolve} from 'path'
export default compose([
    cors('http://localhost:3000'),
    staticServe(resolve(__dirname + '/../../../app/build')),
    errorhandlers,
    bodyParser({
        enableTypes: ['text', 'json', 'form'],
        strict: true,
    }),
    router,
]);
