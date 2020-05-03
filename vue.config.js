module.exports = {
    assetsDir: "static",
    devServer: {
        proxy: {
            "/api": {
                target: process.env.NODE_ENV === 'production' ? "https://admin.92820.cc" : 'http://demo.ixinkexin.com',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        }
    }
};
