import Mongoose from "mongoose";

const Schema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },

    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    }
})

const Book = Mongoose.model('Book', Schema)

export default Book