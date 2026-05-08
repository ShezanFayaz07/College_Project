import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'mysecretkey123', {
        expiresIn:
            process.env.JWT_EXPIRES_IN || '1d'
    });
}
export const registerUser = async ({ name, email, password }) => {
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        passwordHash,
        authProvider: 'email'
    });

    if (!user) {
        throw new Error('Failed to create user');
    };

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
    };
};

export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (user && user.authProvider === 'email' && await bcrypt.compare(password, user.passwordHash)) {
        user.lastLoginAt = new Date();
        await user.save();

        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        };   
    }
    else {
        throw new Error('Invalid email or password');
    }
}

