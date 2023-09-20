const app = require('app');
const { createProxyMiddleware } = require('http-proxy-middleware');

const API_KEY = 'hrFbNW2csA8pZYev9oeqP3oxlEvl1FZN';

app.use('/giphy', createProxyMiddleware({
    target: `api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`,
    changeOrigin: true, // Необходимо для правильной пересылки запросов
    pathRewrite: {
        '^/giphy': '', // Удаляем '/giphy' из пути перед отправкой на Giphy API
    },
}));



