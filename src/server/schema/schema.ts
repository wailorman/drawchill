import gql from 'graphql-tag';
import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import usersModule from './modules/users/index';

// const collectSchema = require('graphql-blocks/collect-schema');
// const gql = require('graphql-tag');
// const path = require('path');
const { combineASTSchemas } = require('graphql-blocks/combine-schemas');

// const { getAllTypes, getAllResolvers, getAllMiddlewares } = collectSchema;

const rootTypes = gql`
  scalar Date

  scalar JSON
`;

const rootResolvers = {
  Date: require('graphql-date'),
  JSON: require('graphql-type-json'),
};

const types = combineASTSchemas([rootTypes, ...usersModule.types]);
const resolvers = merge(rootResolvers, usersModule.resolvers);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: types,
});

// const modulesPath = path.resolve(__dirname, './modules/');

export default schema;
