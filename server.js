var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;


var num = 0
var modolo = 0

net.createServer(function (sock) {
    var state = 0 

sock.on('data', function (data) {
        switch(state){
            case 0:
                if(data.toString() == 'calculate'){
                    console.log(data.toString())
                    sock.write('online')
                    state = 1 
                }
                break
            case 1:
                num = Number(data.toString())
                sock.write(num.toString())
                state = 2
                break
            case 2:
                if(num == 0){
                state = 3
                break
                }
                modolo = Number(data.toString())
                num = num%modolo
                sock.write("Your answer is = "+ num)
            break           
        }
    });
    
}).listen(PORT, HOST);
console.log('Server listening on ' + HOST + ':' + PORT);