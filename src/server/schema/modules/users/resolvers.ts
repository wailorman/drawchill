import { merge } from 'lodash';
const crudResolvers = require('graphql-blocks/crud-resolvers');

import hookier from '../../../utils/hookier';

const resolvers = merge(crudResolvers({ hookier, entityName: 'User' }));

export default resolvers;
