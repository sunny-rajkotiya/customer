import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import apiInitializer from '../routes/api';
const router = new Router();
router.prefix('/api')
apiInitializer(router);
export default compose([router.routes(), router.allowedMethods()]);
