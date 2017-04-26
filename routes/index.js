var express = require('express');
var router = express.Router();
var axios = require('axios');
// var fs = require('fs');
var fi = require('./filterData');


router.get('/send', function(req, res){
  var c = req.query.type;
  fi(c, function(os){
    res.header("Access-Control-Allow-Origin", "*");
    res.json(os)
  })
})


// var data = [];
// var len = 0;
// router.get('/send', function(req, response){
//   axios({
//     method: 'get',
//     url: 'http://onx6ouezf.bkt.clouddn.com/on.BIN',
//     responseType:'stream'
//   }).then(function(res){
//     // res.data.pipe(fs.createWriteStream('ada_lovelace.txt'))
//     res.data.on('data', function(chunk){
//       data.push(chunk);
//       len += chunk.length;
//     })
//     res.data.on('end', function(e){
//       var buff = Buffer.concat(data,len).toString('hex');
//       // console.log(buff);
//       response.json({message: 'ok',key: buff});
//     })
//   })
// })

module.exports = router;
