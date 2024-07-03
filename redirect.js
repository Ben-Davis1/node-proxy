const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
		target: 'http://localhost:4000/',
  }),
);

app.use(
  '/',
  createProxyMiddleware({
		target: 'http://localhost:3000/',
  }),
);

app.listen(8000);
