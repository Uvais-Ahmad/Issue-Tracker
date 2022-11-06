const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    },
    title : {
        type : String,
        required : true

    },
    description : {
        type : String

    },
    label : {
        type :  []
    },
    author : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const Issue = mongoose.model('Issue',issueSchema);
module.exports = Issue;