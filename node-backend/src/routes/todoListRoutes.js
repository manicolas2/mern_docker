var express = require('express');
var app = express();
var router = express.Router();

//mysql specific
var mysql = require('mysql')
var mysql_connection = mysql.createConnection({
  host     : '10.0.3.93',
  user     : 'root',
  password : 'root',
  database : 'dbname',
  insecureAuth : true
});

router.route('/mysql').get(function (req, res) {
  mysql_connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution);
    retval="{'val':'";
    retval2=retval.concat(rows[0].solution);
    retval3=retval2.concat("'}");
    res.json(retval3);
  });
});


//Schema
var TodoList = require('../models/TodoList');

// Get Specific
router.route('/:id').get(function (req, res) {
  var id = req.params.id;
  TodoList.findById(id, function (err, item){
      res.json(item);
  });
});

// Get All Items
router.route('/').get(function (req, res) {
  TodoList.find(function (err, items){
    if(err){
      console.log(err);
    } else {
      res.json(items);
    }
  });
});


// Add item
router.route('/add').post(function (req, res) {
  var item = new TodoList(req.body);
      item.save()
    .then(item => {
    res.json('Added');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route('/update/:id').post(function (req, res) {
  TodoList.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.desc = req.body.desc;

      item.save().then(item => {
          res.json('Updated');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Delete Specific
router.route('/delete/:id').get(function (req, res) {
  TodoList.findByIdAndRemove({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Deleted');
    });
});

module.exports = router;
