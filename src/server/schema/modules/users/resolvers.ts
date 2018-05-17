const resolvers = {
  Query: {
    users: (obj, args) => [{ id: '123' }, { id: '123' }],
  },
};

export default resolvers;
