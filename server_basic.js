const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync('./index.html');

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200, {'Content-type':'text/html'});
        let HTML = fs.readFileSync('./index.html');
        res.write(HTML);
    }else if(req.url === "/api/user"){
        res.writeHead(200, {'Content-type':'application/json'});
        const json = JSON.stringify(
        {
            name: 'Francis',
            cars: ['Ford', 'Nissan']
        });
        res.write(json);
    }
    else{
        res.writeHead(404);
    }
    res.end();
});

server.listen(8181, '127.0.0.1');
console.log('Server is running in port 8181');