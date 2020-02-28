import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import apiInitializer from '../routes/api';
const router = new Router();
apiInitializer(router);
export default compose([router.routes(), router.allowedMethods()]);
