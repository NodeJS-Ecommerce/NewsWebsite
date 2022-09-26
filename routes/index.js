var express = require('express');
var router = express.Router();
var dbConn = require('../model/database');
/* GET home page. */
// display books page
router.get('/tintuc', function(req, res, next) {

    dbConn.query('SELECT * FROM news ORDER BY id desc', function(err, rows) {

        if (err) {
            req.flash('error', err);
            // render to views/books/index.ejs
            res.render('index', { data: '' });
        } else {
            // render to views/books/index.ejs
            res.render('index', { data: rows });
        }
    });
});
router.get('/tintuc/:id', async function(req, res, next) {
    let id = req.query.id;
    console.log(id)
    dbConn.query(`SELECT * FROM news WHERE id=${id}`, function(err, doc) {
        res.render('chitiettintuc.ejs', {
            id: doc._id
        });
    });
});
module.exports = router;