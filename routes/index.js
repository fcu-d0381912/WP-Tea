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

router.get('/form', function (req, res, next) {

    // use ProjectAdd.ejs
    res.render('form', { title: 'upload imformation' });
});

router.get('/form', function (req, res) {
    // do something w/ req.body or req.files
    
});


var formidable = require('formidable');

router.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            return res.redirect(303, '/error');
        }
        console.log('received fields: ');
        console.log(fields);
        console.log('received files: ');
        console.log(files);
        return res.redirect(303, '/form');
    });
});

module.exports = router;
