import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

import schema from './schema/schema';

const db = require('../../models/index');

const app = new Koa();
const router = new Router();

const PORT = 3000;

// koaBody is needed just for POST.
app.use(koaBody());

const graphqlInstance = graphqlKoa({ schema, context: { db } });

router.post('/graphql', graphqlInstance);
router.get('/graphql', graphqlInstance);

router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);

console.log('Server started on port', PORT);
