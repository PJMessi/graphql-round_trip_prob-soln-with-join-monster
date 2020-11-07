import Mongoose from 'mongoose';

// Attribftes.
const Schema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 255,
    },

    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 255,
    },

    author: {
        type: Mongoose.ObjectId,
        ref: 'Author'
    }
});

// Initializing Model.
const Book = Mongoose.model('Book', Schema);

export default Book;
