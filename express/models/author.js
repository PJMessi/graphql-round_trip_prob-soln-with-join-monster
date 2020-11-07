import Mongoose from 'mongoose';

// Attribftes.
const Schema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 255,
    }
});

// Initializing Model.
const Author = Mongoose.model('Author', Schema);

export default Author;
