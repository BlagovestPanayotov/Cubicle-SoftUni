const config = {
    production: {},
    development: {
        PORT: 3000
    }
};

module.exports = config[process.env.node_env || 'development'];