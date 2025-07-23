const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', postSchema);