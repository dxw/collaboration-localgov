const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/share-project/create-project', function(req, res) {
  res.render('share-project/create-project');
});

router.get('/share-idea/create-idea', function(req, res) {
  res.render('share-idea/create-idea');
});

router.get('/projects/', function(req, res) {
  res.render('projects/index');
});

router.post('/share-project/add-outcomes', function(req, res) {
  res.redirect('/share-project/preview-project');
});

router.post('/post-comment', function(req, res) {
  res.redirect('/share-project/published-project');
});

module.exports = router
