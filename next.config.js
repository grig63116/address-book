const path = require("path");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    env: {
        batchLimit: 50,
        limit: 300
    }
};

module.exports = nextConfig;
