const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: { currentTime: () => Date.now() } },
);

UserSchema.plugin(mongoosePaginate)

UserSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            console.log(typeof this.password);
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
            console.log(typeof this.password);
        }
        next();
        console.log(typeof this.password);
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.isValidPassword = async function (password) {
    try {
        const this_password = this.password;
        //console.log(`name: ${this.name}`);
        //console.log(`bcrypt.compare(${password}, ${this_password})`);
        console.log(typeof this.name);
        console.log(typeof this.password);
        console.log(typeof password);
        return await bcrypt.compare(password, this.password);
        //console.log("bcrypt ok");
    } catch (error) {
        console.log(`error with bcrypt${error}`);
        throw error;
    }
};

const User = mongoose.model('user', UserSchema);
module.exports = User;
