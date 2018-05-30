const gqlCrudTestFactory = require('graphql-blocks/crud-tests');

import { query } from '../utils/graphql-query';
const db = require('../../../models/index');

export const gqlCrudTest = gqlCrudTestFactory({ db, query }).gqlCrudTest;

export default gqlCrudTest;
