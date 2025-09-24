const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');

const TransactionSchema = new Schema(
    {
        user_id: {
            type: ObjectId,
            required: true,
        },
        amount: {
            type: float,
        },
        category: {
            type: String,
        },
    },
    { timestamps: { currentTime: () => Date.now() } },
);

TransactionSchema.plugin(mongoosePaginate)

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction;
