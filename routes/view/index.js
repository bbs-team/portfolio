const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/algorithm', (req,res) =>{
  res.render('algorithm')
});

router.get('/algorithm/:name', (req,res) =>{
  res.render('show_contents',{
    name: req.params.name
  })
});

router.get('/project', (req,res) =>{
  res.render('project')
});

router.get('/baekjoon', (req,res) =>{
  res.render('baekjoon')
});


module.exports = router;