import gql from 'graphql-tag';

// import * as crudTypes from 'graphql-blocks/crud-types';
const crudTypes = require('graphql-blocks/crud-types');

const types = [
  gql`
    type User {
      id: ID
      createdAt: Date
      updatedAt: Date
    }

    input UserInput {
      id: ID
    }
  `,
  crudTypes({ entityName: 'User' }),
];

export default types;
