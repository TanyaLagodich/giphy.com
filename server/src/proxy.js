require('dotenv').config();
const app = require('server/src/app');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/v1', createProxyMiddleware({
    target: `api.giphy.com`,
    changeOrigin: true, // Необходимо для правильной пересылки запросов
    pathRewrite: function (path, req) {
        console.log({ path, req });
        return path;
    }
    // pathRewrite: {
    //     '^/giphy': '', // Удаляем '/giphy' из пути перед отправкой на Giphy API
    // },
}));



