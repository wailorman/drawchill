const graphqlQueryFactory = require('graphql-blocks/graphql-query-factory');

import schema from '../schema/schema';
const db = require('../../../models/index');

export const queryFactory = graphqlQueryFactory({ schema });
export const query = queryFactory({ db });

export default query;
