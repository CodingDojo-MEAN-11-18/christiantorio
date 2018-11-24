var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response) {

  console.log('client request URL: ', request.url);

  if (request.url === '/') {
    fs.readFile('./views/index.htm', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/images/cat1') {
    fs.readFile('./images/adorable-animal-animal-world-209037.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/images/cat2') {
    fs.readFile('./images/animal-animal-photography-cat-104827.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents); 
      response.end();
    });
  }


  else if (request.url === '/images/cat3') {
    fs.readFile('./images/animal-cat-face-close-up-416160.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/images/car1') {
    fs.readFile('./images/4k-wallpaper-automobile-automotive-1149137.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/images/car2') {
    fs.readFile('./images/asphalt-auto-automobile-170811.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/images/car3') {
    fs.readFile('./images/automobile-automotive-car-116675.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/cars/new') {
    fs.readFile('./views/cars_new.htm', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' }) ;
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/cats') {
    fs.readFile('./views/cats.htm', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' }) ;
      response.write(contents); 
      response.end();
    });
  }

  else if (request.url === '/cars') {
    fs.readFile('./views/cars.htm', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' }) ;
      response.write(contents); 
      response.end();
    });
  }

  else {
    response.writeHead(404);
    response.end('Status Code: 404 - File not found!!!');
  }

});

server.listen(7077);

console.log("Running in localhost at port 7077" );