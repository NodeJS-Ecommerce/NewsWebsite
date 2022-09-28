var dbConn = require('../model/database');


let get5TinTuc = (req, res) => {
    dbConn.query('SELECT * FROM news ORDER BY id desc limit 0,5', function(err, rows) {
        if (err) {
            req.flash('error', err);
        }
        res.render('index', { rows })
    });

}
let get1TinTuc = (req, res) => {
        dbConn.query('SELECT * FROM news ORDER BY id desc limit 0,1', function(err, row1) {
            if (err) {
                req.flash('error', err);
            }
            res.render('index', { row1 })
        });
    }
    // let get1TinTuc = (req, res) => {
    //     dbConn.query('SELECT * FROM news ORDER BY id desc limit 0,1', function(err, rows1) {
    //         if (err) {
    //             req.flash('error', err);
    //             // render to views/books/index.ejs
    //             res.render('index', { data1: '' });
    //         } else {
    //             // render to views/books/index.ejs
    //             res.render('index', { data1: rows1 });
    //         }
    //     });
    // }
    // let getTinTucById = (req, res) => {
    //     const id = req.params.id;
    //     console.log(id)
    //     dbConn.query(`SELECT * FROM news WHERE id=${id}`, function(err, rows) {

//         if (err) {
//             req.flash('error', err);
//             // render to views/books/index.ejs
//             res.render('chitiettintuc', { data: '' });
//         } else {
//             // render to views/books/index.ejs
//             res.render('chitiettintuc', { data: rows });
//         }
//     });
// }
module.exports = {
    get5TinTuc,
    get1TinTuc
}