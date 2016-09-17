var vo = require('vo'),
    popsicle = require('popsicle'),
    url = 'http://www.google.com';

function get(url) {
    return popsicle.get(url);
}

function getStatus(response) {
    return response.status;
}

vo(get, getStatus)(url)
    .then(console.log)
    .catch(console.log);
