const express = require('express');
const lookupService = require('../../services/lookup');
const router = express.Router();

router.get('/', async (req, res, next)=> {
    try {
      const data = await lookupService.getLookUpData({});
      res.json(data);  
    } catch(err) {
      next(err);
    };
  });

module.exports = router;
