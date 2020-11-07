import userResolvers from './user'
import authorResolvers from './author'

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
        ...authorResolvers.mutations
    },

    Query: {
        ...userResolvers.queries,
        ...authorResolvers.queries,
        books: () => books,
    },
};

export default resolvers;
