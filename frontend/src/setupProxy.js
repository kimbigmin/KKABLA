import createProxyMiddleware from 'http-proxy-middleware';

export default (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://http://elice-kdt-sw-1st-team10.elicecoding.com:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // URL ^/api -> 공백 변경
      },
    }),
  );
};
