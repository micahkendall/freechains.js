const net = require("net");
var VERSION = "v0.8.4";

exports.freechains = function(params) {
    if (!params){
        return;
    }
    var ip = params.ip || '127.0.0.1', port = params.port || '8330';
   console.log(params)
   var s = net.connect(port, ip);
   let received = ""
	s.on("data", data => {
  		received += data
  		console.log(received) // Hello
	})
	return (function(str){
		s.write("FC v0.8.4 "+str+"\n");
	});
}