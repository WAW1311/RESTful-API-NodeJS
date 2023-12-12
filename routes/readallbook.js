const books = require('../bookstore');

const readallbooks = (request, h) => {
  if (books.length === 0) {
    return h.response({
      status: 'success',
      data: {
        books: [],
      },
    }).code(200);
  }else {
    
  return h.response({
    status: 'success',
    data: {
      books: books.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  }).code(200);
}
};

module.exports = readallbooks;