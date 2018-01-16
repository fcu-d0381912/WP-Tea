var express = require('express');
var router = express.Router();
var path = require('path');

var fs = require('fs');
var multer = require('multer')
var filess;
var dateData;
var storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
      filess = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
      cb(null, filess);
     
  }
});

	function setTime() {
		　　  var NowDate=new Date();
			  var y=NowDate.getFullYear();
		      var month=NowDate.getMonth();
			  var date=NowDate.getDate();
			　var h=NowDate.getHours();
			　var m=NowDate.getMinutes();
			　var s=NowDate.getSeconds();
			  dateData=y+'年'+(month+1)+'月'+date+'日'+h+'時'+m+'分'+s+'秒';
			  console.log(dateData);
			　//document.getElementById('showtime').innerHTML = y+'年'+(month+1)+'月'+date+'日'+h+'時'+m+'分'+s+'秒';
	}
/*
var upload = multer({
  storage: storage
});
*/
// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 10000000},
});


//var upload = multer({ dest: 'public/img2/' });
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
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
        // use index.ejs
        res.render('index', { title: 'index Information',Ssn});
});
router.get('/about', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
    // use ProjectAdd.ejs
    res.render('about', { title: 'about Tea',Ssn});
});

router.get('/forum', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
	var db = req.con;
    var data = "";
    db.query('SELECT * FROM record ', function(err, rows) {
        if (err) {
            console.log(err);
        }

        var data = rows;
        res.render('forum', { title: 'forum imformation', data: data,Ssn });
    });
});

router.post('/addcomment', function(req, res, next) {
	setTime();
	var Password= req.query.Password;
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
	var db = req.con;	
    var sql = {
        RSsn: req.session.Ssn,
		Text: req.body['Commentmysql'],
        Time: dateData,
        Theme: 0       
    };

    console.log(sql);
    var qur = db.query('INSERT INTO record SET ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/forum');
    });
});

router.get('/intro', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
    // use ProjectAdd.ejs
    res.render('intro', { title: 'intro Tea',Ssn});
});

router.get('/store', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
	var db = req.con;
    var data = "";
    db.query('SELECT * FROM tea ', function(err, rows) {
        if (err) {
            console.log(err);
        }

        var data = rows;
        res.render('store', { title: 'store imformation', data: data,Ssn });
    });
});


var formidable = require('formidable');
/*router.post('/upload', upload.single('logo'),function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            return res.redirect(303, '/error');
        }
        console.log('received fields: ');
        console.log(fields);
        console.log('received files: ');
        console.log(files);
        return res.redirect(303, '/upload');
    });
});*/



router.get('/upload', function (req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
    // use ProjectAdd.ejs
    res.render('upload', { title: 'upload imformation',Ssn });
});
router.get('/login', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;

    // use teaAdd.ejs
    res.render('login', { title: 'login',Ssn});
	
});

router.get('/form', function (req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
    // use ProjectAdd.ejs
	
	
    res.render('form', { title: 'upload imformation',Ssn });
});
router.get('/logintest', function(req, res, next) {
	
	var db = req.con;	
    var data = null;
    var state= req.query.state;
	var Ssn= req.query.Ssn;
	var Password= req.query.Password;
	
	
	
	
	//md5 = crypto.createHash('md5');

    var query=db.query('SELECT * FROM user WHERE Ssn=? AND Password=?',[Ssn,Password], function(err, rows) {
        if (err) {
            console.log(err);
        }	
		//Password = md5.update(Password).digest('hex');
        data = rows;
		console.log(data);
		if(data.length == 0){
			res.locals.error = '使用者不存在';           
			res.render('login', { title: 'login falid', data: data});
		}
		else{
			res.locals.Ssn = Ssn;
            //設定session
            req.session.Ssn = res.locals.Ssn; 
            console.log(req.session.Ssn);   
			res.render('index', { title: 'login success', data: data,Ssn});
			return;
			
		}
    });
});

router.get('/register', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;

    // use teaAdd.ejs
    res.render('register', { title: 'register',Ssn});
	
});

router.post('/register', function(req, res, next) {

	var db = req.con;	
    var sql = {
        Ssn: req.body.Ssn,
		Password: req.body.Password,
        state: 0,            
    };

    console.log(sql);
    var qur = db.query('INSERT INTO user SET ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/');
    });
});
//loginout
router.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});
// add page

router.get('/addTea', function(req, res, next) {
			var sess = req.session;
			var Ssn = sess.Ssn;
			var isLogined = !!Ssn;
    var db = req.con;
    var data = "";

    db.query('SELECT * FROM tea ', function(err, rows) {
        if (err) {
            console.log(err);
        }

        var data = rows;
        res.render('addTea', { title: 'Add Tea', data: data,Ssn });
    });
});
router.post('/addTea', upload.single('logo') ,function(req, res, next) {
  
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            return res.redirect(303, '/error');
        }
        console.log('received fields: ');
        console.log(fields);
        console.log('received files: ');
        console.log(files);
        //return res.redirect(303, '/upload');
     
    });

	var db = req.con;	
    var sql = {
		Tid:req.body.Tid,
        Tname: req.body.Tname,
        price: req.body.price,
        TeaSpecies: req.body.TeaSpecies,
        ProtoURL: filess
    };
    

    console.log(sql);
    var qur = db.query('INSERT INTO tea SET ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/store');
    });
});

module.exports = router;
