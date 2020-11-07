import Author from '../../models/author';

const resolvers = {
    mutations: {
        addAuthor: async (parent, args, context, info) => {
            const authorInput = args.authorInput;

            if (!context.isAuth) {
                throw new Error('Unauthenticated.')
            }
                
            try {
                const authorData = new Author({
                    name: authorInput.name,
                    email: authorInput.email
                });
    
                const author = await authorData.save();
    
                return author;
            } catch (err) {
                throw err;
            }
        }
    },

    queries: {
        getAuthors: async (parent, args, context, info) => {
            if (!context.isAuth) {
                throw new Error('Unauthenticated.')
            }

            try {
                const authors = await Author.find()

                return authors

            } catch {
                throw err;
            }
        }
    }

};

export default resolvers;
