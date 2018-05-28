import gql from 'graphql-tag';
// import * as crudTypes from 'graphql-blocks/crud-types';
const crudTypes = require('graphql-blocks/crud-types');

const types = [
  gql`
    type UserSocialVk {
      id: ID
      profileId: String
      profileUrl: String
      profilePhotoUrl: String
      createdAt: Date
      updatedAt: Date
    }

    input UserSocialVkInput {
      id: ID
    }
  `,
  crudTypes({ entityName: 'UserSocialVk' }),
];

export default types;
