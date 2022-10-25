const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');
const farmRouter = require('./routes/farm');
const deviceRouter = require('./routes/device');
const lookupRouter = require('./routes/lookup');
const cropCycleRouter = require('./routes/cropCycle');
const cropCycleActivityRouter = require('./routes/cropCycleActivity');
const errors = require('./middleware/errors');
const auth = require('./middleware/auth');

const nodeEnv = process.env.NODE_ENV || 'production';
dotenv.config({ path: `${nodeEnv}.env` });

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/farm', auth.authenticate, farmRouter);
app.use('/device', auth.authenticate, deviceRouter);
app.use('/lookup', auth.authenticate, lookupRouter);
app.use('/cropcycle', auth.authenticate, cropCycleRouter);
app.use('/cropcycleactivity', auth.authenticate, cropCycleActivityRouter);
app.use(errors.errorHandler);
module.exports = app;