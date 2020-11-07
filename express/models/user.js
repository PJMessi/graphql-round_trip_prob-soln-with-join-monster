import Mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// Attributes.
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
    },

    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
});

// Methods.
Schema.methods.generateJwtToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_SECRET_EXPIRE }
    );

    return token;
};

// Initializing Model.
const User = Mongoose.model('User', Schema);

export default User;
