import gql from 'graphql-tag';

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
