const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    author: {
        type: string,
        required: true,
    },
    date: {
        type: string,
        required: true,
    },
    title: {
        type: string,
        required: true,
    },
    body: {
        type: string,
        required: true,
    },

})

module.exports = mongoose.model("Blog", blogSchema);