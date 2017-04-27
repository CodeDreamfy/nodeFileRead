var fs = require('fs');
var JSZip = require("jszip");
var path = require('path');

function configFilter(name,cb){
  var url = path.join(__dirname,'../file',name+'.zip');
  var o = {}
  fs.readFile(url, function(err, data) {
    if (err) {
      cb({
        msg: 'error',
        code: -1
      })
      return false;
    }
    JSZip.loadAsync(data).then(function (zip) {
      for(var name in zip.files) {
        var file = zip.files[name];
        if(file.dir){
          continue;
        }
        var content = new Uint8Array(file._data.compressedContent).join();
        var n = name.split('/');
        n = (n[n.length-1]).split('.')[0]
        o[n] = content;
      }
      cb({
        msg: 'ok',
        data: o,
        code: 200
      })
    });
  })

}


module.exports = configFilter
