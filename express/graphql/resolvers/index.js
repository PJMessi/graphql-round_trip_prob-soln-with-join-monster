import userResolvers from './user'

const books = [
    {
        _id: 1,
        title: 'The Awakening',
        description: 'Kate Chopin',
    },
    {
        _id: 2,
        title: 'City of Glass',
        description: 'Paul Auster',
    },
];

const resolvers = {
    Mutation: {
        ...userResolvers.mutations,
    },

    Query: {
        ...userResolvers.queries,
        books: () => books,
    },
};

export default resolvers;
