import User from '../../models/user';
import bcrypt from 'bcrypt';

const resolvers = {
    mutations: {
        addUser: async (parent, args, context, info) => {
            const userInput = args.userInput;
    
            // Hashing password.
            const hashedPassword = await bcrypt.hash(userInput.password, 12);
    
            try {
                const userData = new User({
                    name: userInput.name,
                    email: userInput.email,
                    password: hashedPassword,
                });
    
                const user = await userData.save();
    
                return user;
            } catch (err) {
                throw err;
            }
        }
    },

    queries: {
        loginUser: async (parent, args, context, info) => {
            const user = await User.findOne({ email: args.email });
    
            if (!user) {
                throw new Error('Invalid credentials.');
            }
    
            const isPasswordCorrect = await bcrypt.compare(
                args.password,
                user.password
            );
            if (!isPasswordCorrect) {
                throw new Error('Invalid credentials.');
            }
    
            const token = user.generateJwtToken();
    
            return {
                token: token,
                tokenExpiration: process.env.JWT_SECRET_EXPIRE,
                user: user,
            };
        }
    }

};

export default resolvers;
