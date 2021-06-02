var knex = require('knex')({
    client: 'mysql',

    connection: {
        host: '162.214.102.68',
        user: 'samuel_SamuelDEV',
        password: 'Samuel2112@',
        database: 'samuel_TesteDani'
    }
});

module.exports = knex