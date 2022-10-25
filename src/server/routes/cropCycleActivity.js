const express = require('express');
const cropCycleActivityService = require('../../services/cropCycleActivity');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const response = await cropCycleActivityService.postCropCycleActivity(req.body);
    res.json(response);
  } catch(err) {
    next(err);
  }
});

router.get('/cropcycle/:cropcycleid', async (req, res, next)=> {
  try {
    const data = await cropCycleActivityService.getCropCycleActivity({"cropCycleId": req.params.cropcycleid});
    res.json(data);
  } catch(err) {
    next(err);
  };
});

router.post('/all', async (req, res, next)=> {
    try {
      const data = await cropCycleActivityService.getCropCycleActivities(req.body);
      res.json(data);
    } catch(err) {
      next(err);
    };
  });

module.exports = router;
