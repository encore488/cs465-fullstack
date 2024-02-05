const mongoose = require('mongoose');

// Define the schema
const tripSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    name: {type: String, required: true, index:true},
    length: {type: Number, required: true},
    start: {type: Date, required: true},
    resort: {type: String, required: true},
    perPerson: {type: Number, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

mongoose.model("trips", tripSchema);
module.exports = mongoose.model("trips", tripSchema);