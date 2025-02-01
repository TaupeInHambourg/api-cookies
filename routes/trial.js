var express = require('express');
var router = express.Router();
var services = require('../services/request');

router.get('/api/trials', async (req, res) => {
    // res.status(200).json({message: 'trials view'});

    try {
        const trials = await services.getTrials();

        if (!trials) {return res.status(400).json({success: false, message: "Une erreur à été rencontrée."})}
        
        return res.status(200).json(trials);    

    } catch (error) {
        return res.status(500).json({ success: false, message: "Erreur interne du serveur." })
    }
})

module.exports = router;

