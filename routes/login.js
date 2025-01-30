var express = require('express');
var router = express.Router();
var services = require('../services/request');

router.get('/api/login', function(req, res, next){
  res.status(200).json({message: 'login view'});
})

router.post('/api/login', async function (req, res, next){
  var identifiant = req.body.identifiant;
  var password = req.body.password;

  if (!identifiant || !password){
    console.log('CURL PARAM', identifiant, password);
    res.status(400).json({erreur : "identifiant ou password introuvable(s)."});
  }
  
  try {
    const user = await services.authenticateUser(identifiant, password);
    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Identifiants incorrects." });
    }
  } catch (error) {
    console.error(`Couldn't authenticate user`, error.message);
    res.status(500).json({ erreur: "Erreur interne du serveur." });
    next(error);
  }

})

module.exports = router;