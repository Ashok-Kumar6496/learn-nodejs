const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (value < 1) {
                throw new Error('The age must be more than an year!!');
            }
        }
    },
    email: {
        type: String,
        required: false,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('The email is not valid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('The Password does not contain "password"');
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.methods.generateJsonWebToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismypassword')
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user;
}

// userSchema.pre('save', async function (next) {
//     const user = this;
//     user.password = await bcrypt.hash(user.password, 8)
//     next()
// })

const User = mongoose.model('user', userSchema);





module.exports = User;