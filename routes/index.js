var express = require('express');
var router = express.Router();
var Video = require('../models/video');
/* GET home page. */
router.get('/', async(req,res)=>{
  res.render("index",{title: "Express"});
})

router.get('/getAll', async(req, res) => {
  let videos = await Video.find({}).sort({"publishTime": -1});
  console.log(videos);
  res.json(videos);
});

router.get('search/:query',async (req,res)=>{
  let query = req.params.query;
  //search the query in the database by matching title and description
  let videos = await Video.find({$or:[{title: {$regex: query, $options: 'i'}},{description: {$regex: query, $options: 'i'}}]});
  res.json(videos);
})


module.exports = router;
