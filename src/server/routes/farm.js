const express = require('express');
const farmService = require('../../services/farm');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const response = await farmService.postFarm(req.body);
    res.json(response);
  } catch(err) {
    next(err);
  }
});

router.get('/:farmid', async (req, res, next)=> {
  try {
    const data = await farmService.getFarm(req.params.farmid);
    res.json(data);
  } catch(err) {
    next(err);
  };
});

router.get('/all/:userid', async (req, res, next)=> {
    try {
      const data = await farmService.getFarms({"userId": req.params.userid});
      res.send(data);
    }
      catch(err) {
       next(err);
     };
});

router.put('/', async (req, res, next) => {
  try {
    const response = await farmService.updateFarm(req.body);
    res.json(response);
  } catch(err) {
    next(err);
  }
});

module.exports = router;
