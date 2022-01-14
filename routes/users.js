var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    [
      { id: 1, username: 'alice', email: 'alice@company.com', sn: 1},
      { id: 2, username: 'bob', email: 'alice@company.com', sn: 12}
    ]
  );
});

router.get('/1', function(req, res, next) {
  res.json({ id: 1, username: 'alice', email: 'alice@company.com', sn: 1});
});

router.get('/3', function(req, res, next) {
  res.status(404).json({ message: 'User not found'});
});

router.post('/', function(req, res, next) {
  res.status(201).json({ message: 'user created'});
});

router.put('/1', function(req, res, next) {
  res.status(200).json({ message: 'User updated'});
});

router.delete('/1', function(req, res, next) {
  res.status(200).json({ message: 'User deleted'});
});

module.exports = router;
