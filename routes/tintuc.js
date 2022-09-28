var express = require('express');
var router = express.Router();
var { get5TinTuc, get1TinTuc } = require('../controllers/homeController')
    /* GET home page. */
    // display books page
router.get('/', get5TinTuc);
router.get('/', get1TinTuc);
// router.get('/', get4TinTuc);
// router.get('/:id', getTinTucById);

module.exports = router;