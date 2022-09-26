var express = require('express');
var router = express.Router();
var db = require('../model/database');
router.get('/dangky', function(req, res) {
    res.render("dangky");
});
router.get('/camon', function(req, res) {
    res.render("camon");
});
router.post('/luu', function(req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let em = req.body.email;

    const bcrypt = require("bcrypt");
    var salt = bcrypt.genSaltSync(10);
    var pass_mahoa = bcrypt.hashSync(p, salt);

    let user_info = { username: u, password: pass_mahoa, email: em };
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, user_info);
    res.redirect("/thanhvien/dangnhap");
})

router.get('/dangnhap', function(req, res) {
    res.render("dangnhap");
});
router.post('/dangnhap_', async function(req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [u], (err, rows) => {
        if (rows.length <= 0) {
            res.redirect("/thanhvien/dangnhap");
            return;
        }
        let user = rows[0];
        let pass_fromdb = user.password;
        const bcrypt = require("bcrypt");
        var kq = bcrypt.compareSync(p, pass_fromdb);
        if (kq) {
            console.log("OK");
            res.redirect("/");
        } else {
            console.log("Not OK");
            res.redirect("/thanhvien/dangnhap");
        }
    });
});
module.exports = router;