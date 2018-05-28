import { merge } from 'lodash';
const crudResolvers = require('graphql-blocks/crud-resolvers');

import hookier from '../../../utils/hookier';

const resolvers = merge(crudResolvers({ hookier, entityName: 'UserSocialVk' }));

export default resolvers;
