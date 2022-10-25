const express = require('express');
const deviceService = require('../../services/device');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const response = await deviceService.postdevice(req.body);
    res.json(response);
  } catch(err) {
    next(err);
  }
});

router.get('/:deviceid', async (req, res, next)=> {
  try {
    const data = await deviceService.getDevice(req.params.deviceid);
    res.json(data);
  } catch(err) {
    next(err);
  };
});

router.get('/all/:userid', async (req, res, next)=> {
    try {
      const data = await deviceService.getDevices({"userId": req.params.userid});
      res.json(data);
    } catch(err) {
      next(err);
    };
  });

module.exports = router;
