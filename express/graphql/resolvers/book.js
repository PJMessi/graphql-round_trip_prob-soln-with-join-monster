import Book from '../../models/book';
import Author from '../../models/author';

const resolvers = {
    mutations: {
        addBook: async (parent, args, context, info) => {

            if (!context.isAuth) {
                // throw new Error('Unauthenticated.')
            }

            const bookInput = args.bookInput;

            const author = await Author.findOne({ _id: bookInput.author });
            if (!author) {
                throw new Error('Author not found')
            }


            try {
                const bookData = new Book({
                    title: bookInput.title,
                    description: bookInput.description,
                    author: bookInput.author
                });

                const book = await bookData.save();

                return book;
            } catch (err) {
                throw err;
            }
        },
    },

    queries: {
        getBooks: async (parent, args, context, info) => {
            if (!context.isAuth) {
                // throw new Error('Unauthenticated.')
            }

            try {
                const books = await Book.find();

                return books;
            } catch {
                throw err;
            }
        },
    },
};

export default resolvers;
