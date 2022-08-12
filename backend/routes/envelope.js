const router = require('express').Router();
let Envelope = require('../models/envelope.model');

router.route('/').get((req, res) =>{
    Exercise.find()
        .then(envelope => res.json(envelope))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/envelopes').post((req, res) =>{
    const category = req.body.category;
    const description = req.body.description;
    const amount = Number(req.body.amount); //The Number() function will convert a string to a numeric value.

    const newEnvelope = new Envelope({
        category,
        description,
        amount
    });

    newEnvelope.save()
        .then(() => res.json('Envelope created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete((req, res) =>{
    Member.findOneAndRemove({_id: req.params.id}, function(err, member){
        if(!err && member){
            console.log(member);
            console.log("member successfully deleted");
        } else{
            console.log("error detected");
        }
        res.redirect("/");
    });
})

module.exports = router;