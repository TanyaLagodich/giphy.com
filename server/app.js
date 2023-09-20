const express = require('express');

const app = express();

const { createProxyMiddleware } = require('http-proxy-middleware');

const API_KEY = 'hrFbNW2csA8pZYev9oeqP3oxlEvl1FZN';

app.use('/v1/gifs', createProxyMiddleware({
    logLevel: 'debug',
    target: 'https://api.giphy.com',
    changeOrigin: true, // Необходимо для правильной пересылки запросов
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.path += `?api_key=${API_KEY}`;
    },
}));

module.exports = app;
