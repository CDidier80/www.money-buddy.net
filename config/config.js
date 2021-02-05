require('dotenv').config()

module.exports = {
    development: {
        database: "money_buddy_development",
        host: "127.0.0.1",
        dialect: "postgres",
        define: {
            underscored: true
        }, 
    },
    test: {
        database: "money_buddy_test",
        dialect: "postgres",
        host: "127.0.0.1",
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        define: {
            underscored: true
        },
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
                require: true
            }
        }
    }
}


