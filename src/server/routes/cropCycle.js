const express = require('express');
const cropCycleService = require('../../services/cropCycle');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const response = await cropCycleService.postCropCycle(req.body);
    res.json(response);
  } catch(err) {
    console.log(err)
    next(err);
  }
});

router.get('/:farmid', async (req, res, next)=> {
  try {
    const data = await cropCycleService.getCropCycle({"farmId":req.params.farmid});
    res.json(data);
  } catch(err) {
    next(err);
  };
});

router.post('/all', async (req, res, next)=> {
  try {
    // const data = await cropCycleService.getCropCycles({"farmId": { "$in" : req.body.farmIds}});
    const data = await cropCycleService.getCropCycles(req.body);
    res.json(data);
  } catch(err) {
    console.log(err)
    next(err);
  };
});

router.put('/', async (req, res, next) => {
  try {
    const response = await cropCycleService.updateCropCycle(req.body);
    // const response = await cropCycleService.updateCropCycle(req.params.cropcycleid);
    res.json(response);
  } catch(err) {
    next(err);
  }
});
module.exports = router;
