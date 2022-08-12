//Import the mongoose package and create an object.
const mongoose = require('mongoose');
//const Schema = mongoose.Schema();

//Create the envelope budget schema
const envelopeSchema = mongoose.Schema({
    category: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true}
})

//Export the schema model.
//const Envelope = mongoose.model('Envelope', envelopeSchema);
//module.exports = Envelope;

module.exports = Envelope = mongoose.model('Envelope', envelopeSchema);