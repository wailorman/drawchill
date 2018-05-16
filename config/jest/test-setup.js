const _ = require('lodash');
const chai = require('chai');
const gql = require('graphql-tag');
const { genUUID } = require('../../server/utils/fixtures');

global._ = _;
global.chai = chai;
global.assert = chai.assert;
global.gql = gql;
global.gu = genUUID;


chai.use( require("chai-as-promised") );
chai.use( require("chai-samsam") );

chai.config.truncateThreshold = 0;
chai.config.showDiff = true;

jest.setTimeout(30000);

Error.stackTraceLimit = Infinity;
