const addbook = require('./routes/addbook');
const readallbooks = require('./routes/readallbook');
const detailbook = require('./routes/detailbook');
const updatebook = require('./routes/updatebook');
const deletebook = require('./routes/deletebook');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addbook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: readallbooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: detailbook,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updatebook,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deletebook,
    }
];

module.exports = routes;