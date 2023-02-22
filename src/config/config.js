const config = {
    production: {},
    development: {
        PORT: 3000,
        DB_URL:'mongodb://localhost:27017/cubicle',
        SECRET:'SOME SECRET',
    }
};

module.exports = config[process.env.node_env || 'development'];