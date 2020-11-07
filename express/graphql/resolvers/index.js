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
    Query: {
        books: () => books,
    },
};

export default resolvers;
