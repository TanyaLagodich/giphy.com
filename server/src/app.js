const express = require('express');
const cors = require('cors');
const app = express();

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());

app.use('/proxy/', createProxyMiddleware({
    logger: console,
    target: 'https://api.giphy.com',
    changeOrigin: true, // Необходимо для правильной пересылки запросов
    pathRewrite: {
        '^/proxy': '/v1/',
    },
    onProxyReq: (proxyReq, req, res) => {
        const baseUrl = `${proxyReq.protocol}//${proxyReq.host}`;
        const url = new URL(proxyReq.path, baseUrl);
        url.searchParams.append('api_key', process.env.API_KEY);
        proxyReq.path = url.pathname + url.search;
    }
}));

module.exports = app;
