const books = require('../bookstore')

const deletebook = (request, h) => {
    const { bookId } = request.params;

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
      return h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      }).code(404);
    }
  
    books.splice(bookIndex, 1);
  
    return h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
  };
  
  module.exports = deletebook;
  