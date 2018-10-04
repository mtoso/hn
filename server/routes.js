const fetch = require('node-fetch');
const { getHackerNewsUrl } = require('./config');

const appRouter = function (app) {
    // fetch stories
    app.get('/api/search', (req, res) => {
        const page = req.query.page;
        const value = req.query.query;
        fetch(getHackerNewsUrl(value, page))
            .then(response => response.json())
            //.then(result => console.log(result))
            .then(result => res.json(result));

    });
}

module.exports = appRouter;