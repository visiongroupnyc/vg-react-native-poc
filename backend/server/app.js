const http = require('http');
const express = require('express');
const path = require('path');
const config = require('config');
const up = require('universal-pattern');

const port = config.get('port');
const app = express();
const server = http.createServer(app);

up(app, {
  swagger: {
    baseDoc: config.get('basePath'),
    host: `${config.get('host')}:${config.get('port')}`,
    folder: path.join(process.cwd(), 'swagger'),
    info: {
      version: 10.0,
      title: 'Tree-Open Data Poc',
      termsOfService: 'www.domain.com/terms',
      contact: {
        email: 'orianadecaro@gmail.com.com.ar',
      },
      license: {
        name: 'Apache',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
  },
  compress: true,
  cors: true,
  production: process.env.NODE_ENV === 'production',
  database: {
    uri: config.get('connection.mongodb.uri'),
    name: config.get('connection.mongodb.name'),
  },
  routeController: (req, res, next, props) => next(), 
  
})
  .then((upInstance) => server.listen(port, () => console.info(`listen *:${port}`)))
  .catch(err => console.error('Error initializing ', err));
console.log(app)
