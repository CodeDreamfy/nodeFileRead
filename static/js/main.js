// var JSZip = require("jszip");
// var JSZipUtils = require("./JSZipUtils");
// var zip = new JSZip();

$(function(){
	function showError(elt, err) {
    elt.innerHTML = "<p class='alert alert-danger'>" + err + "</p>";
  }
  function showContent(elt, content) {
    elt.innerHTML = "<p class='alert alert-success'>loaded !<br/>" +
      "Content = " + content + "</p>";
  }


	// let reader = new FileReader();
	// reader.onload = function(e){
	// 	if(reader.result) {
	// 		reader.content = reader.result;
	// 		console.log(reader.content)
	// 	}
	// }
	// reader.readAsText('./bin/on.BIN');
	// $.get('http://onx6ouezf.bkt.clouddn.com/on.BIN', function(data){
	// 	if(!data){
	// 		showError(data);
	// 		return false;
	// 	}
	// 	var markup = [];
	// 	var result = data;
	// 	for (var n = 0; n < result.length; ++n) {
	// 			var aByte = result.charCodeAt(n);
	// 			var byteStr = aByte.toString(16);
	// 			if (byteStr.length < 2) {
	// 					byteStr = "0" + byteStr;
	// 			}
	// 			markup.push(byteStr);
	// 	}
	// 	console.log(markup)
	// })

	/*
	var oReq = new XMLHttpRequest(), markup = [];
	oReq.open("GET", "http://onx6ouezf.bkt.clouddn.com/on.BIN", true);
	oReq.responseType = "arraybuffer";

	oReq.onload = function (oEvent) {
		var arrayBuffer = oReq.response; // 注意:不是oReq.responseText
		if (arrayBuffer) {
			var byteArray = new Uint8Array(arrayBuffer);
			console.log(byteArray)
			for (var i = 0; i < byteArray.byteLength; i++) {
				// 对数组中的每个字节进行操作
				var aByte = byteArray[i];
				var byteStr = aByte.toString(16);
				if (byteStr.length < 2) {
						byteStr = "0" + byteStr;
				}
				markup.push(byteStr);
			}
			console.log(markup)
		}
	};
	oReq.send(null);

	*/
	/*
		test

	$.get('/send', {
		type: 'YB0F2'
	}, function(res){
		console.log(res.data)
	})
	**/
})
