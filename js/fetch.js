  // .then(function(response) {
  //   return response.text()
  // }).then(function(body) {
  //   document.body.innerHTML = body
  // })
var fetch = require('C:/Program Files/nodejs/node_modules/npm/node_modules/node-fetch');
 
var url = 'https://github.com/fakendzon/fakendzon.github.io/tree/master/music';
fetch(url)
    .then((response) => {
        response.json()
    })
var myList = document.querySelector('ul');
