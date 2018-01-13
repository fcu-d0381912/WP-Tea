var express = require('express');
var router = express.Router();


/*
//test db
// home page
router.get('/', function(req, res, next) {

    var db = req.con;
    var data = "";

    db.query('SELECT * FROM project', function(err, rows) {
        if (err) {
            console.log(err);
        }
        var data = rows;

        // use index.ejs
        res.render('index', { title: 'Account Information', data: data});
    });

});
// add page
router.get('/add', function(req, res, next) {

    // use ProjectAdd.ejs
    res.render('projectAdd', { title: 'Add Project'});
});

// add post
router.post('/projectAdd', function(req, res, next) {

    var db = req.con;

    var sql = {
        Pname: req.body.Pname,
        Pnum: req.body.Pnum,
        Super_SSn: req.body.Super_SSn
    };

    console.log(sql);
    var qur = db.query('INSERT INTO project SET ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/');
    });

});
// edit page
router.get('/projectEdit', function(req, res, next) {

    var Pnum = req.query.Pnum;
    var db = req.con;
    var data = "";

    db.query('SELECT * FROM project WHERE Pnum = ?', Pnum, function(err, rows) {
        if (err) {
            console.log(err);
        }

        var data = rows;
        res.render('projectEdit', { title: 'Edit Project', data: data });
    });
//edit update
router.post('/projectEdit', function(req, res, next) {

    var db = req.con;
    var Pnum = req.body.Pnum;

    var sql = {
        //Pname: req.body.Pname,
        Pnum: req.body.Pnum,
        //Super_SSn: req.body.Super_SSn
    };

    var qur = db.query('UPDATE project SET ? WHERE Pnum = ?', [sql, Pnum], function(err, rows) {
        if (err) {
            console.log(err);
        }

        res.setHeader('Content-Type', 'application/json');
        res.redirect('/');
    });

});

});
//test db end
*/
//boostrap
// home page
router.get('/', function(req, res, next) {

        // use index.ejs
        res.render('index', { title: 'index Information'});
});
router.get('/about', function(req, res, next) {

    // use ProjectAdd.ejs
    res.render('about', { title: 'about Tea'});
});

router.get('/forum', function(req, res, next) {

    // use ProjectAdd.ejs
    res.render('forum', { title: 'forum imformation'});
});

router.get('/intro', function(req, res, next) {

    // use ProjectAdd.ejs
    res.render('intro', { title: 'intro Tea'});
});

router.get('/store', function(req, res, next) {

    // use ProjectAdd.ejs
    res.render('store', { title: 'store imformation'});
});

router.get('/upload', function (req, res, next) {

    // use ProjectAdd.ejs
    res.render('upload', { title: 'upload imformation' });
});

module.exports = router;
