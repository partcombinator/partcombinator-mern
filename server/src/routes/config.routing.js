const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const auth = require('../middleware/auth');

// api/config
router.get('/',
    auth,
    configController.getConfig
);

// api/config/web_online
router.post('/web_online',
    auth,
    configController.web_online
);


module.exports = router;