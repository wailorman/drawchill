import hookier from '../../../../utils/hookier';

const foreignHooks = require('graphql-blocks/foreign-mediator/foreign-hooks');

const e = foreignHooks.defineMultipleHooks([
  {
    primaryEntityName: 'User',
    foreignEntityName: 'UserSocialVk',
    relationType: 'hasOne',
    ops: {
      get: true,
      create: true,
      update: true,
      validate: true,
    },
  },
  {
    primaryEntityName: 'UserSocialVk',
    foreignEntityName: 'User',
    relationType: 'belongsTo',
    ops: {
      get: true,
    },
  },
]);
