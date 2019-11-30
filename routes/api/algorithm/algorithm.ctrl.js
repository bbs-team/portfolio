const { algorithm } = require('../../../models');

const show = (req,res) => {
  var name = req.params.name;
  console.log(name);
  console.log('test');
  algorithm.findAll({
    where:{name:name}
  }).then(result =>{
    if(result){
      res.json({
        result: 'success',
        data: result
      })
    }
  }).error( err=> {
    res.json({
      result: 'fail',
      err: err
    })
  })
};

module.exports = {
  show
}