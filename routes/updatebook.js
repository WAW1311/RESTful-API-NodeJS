const books = require('../bookstore');

const updatebook = (request, h) => {
    const { bookId } = request.params;
    const {
      name, year, author, summary, publisher,
      pageCount, readPage, reading,
    } = request.payload;
    const selectedBook = books.find(book => book.id === bookId);
  
    if (!selectedBook) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      }).code(404);
    }
  
    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      }).code(400);
    }
  
    if (readPage > pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400);
    }

    const finished = readPage === pageCount;
  
    Object.assign(selectedBook, {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt: new Date().toISOString(),
    });
  
    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }).code(200);
  };
  
  module.exports = updatebook;
  