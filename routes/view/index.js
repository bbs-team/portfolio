const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/algorithm', (req,res) =>{
  res.render('algorithm')
});

router.get('/algorithm/:name', (req,res) =>{
  res.render('show_algorithm',{
    name: req.params.name
  })
});

router.get('/project', (req,res) =>{
  res.render('project')
});

router.get('/baekjoon', (req,res) =>{
  res.render('baekjoon')
});

router.get('/etc',(req,res) => {
  res.render('etc')
})

router.get('/etc/:name', (req,res) =>{
  res.render('show_etc',{
    name: req.params.name
  })
});


module.exports = router;