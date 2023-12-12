const books = require('../bookstore');

const detailbook = (request, h) => {
  const { bookId } = request.params;

  const selectedBook = books.find(book => book.id === bookId );

  if (!selectedBook) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: {
      book: selectedBook,
    },
  }).code(200);
};

module.exports = detailbook;
