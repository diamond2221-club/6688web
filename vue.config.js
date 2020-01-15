module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://47.107.229.128",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        }
    }
};
