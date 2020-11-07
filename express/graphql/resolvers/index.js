import userResolvers from './user'
import authorResolvers from './author'
import bookResolvers from './book'

const resolvers = {
    Mutation: {
        ...userResolvers.mutations,
        ...authorResolvers.mutations,
        ...bookResolvers.mutations
    },

    Query: {
        ...userResolvers.queries,
        ...authorResolvers.queries,
        ...bookResolvers.queries
    },
};

export default resolvers;
