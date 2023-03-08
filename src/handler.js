const {nanoid} = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  const {
    name, year, author, summary,
    publisher, pageCount, readPage, reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id, name, year, author, summary, publisher,
    pageCount, readPage, finished, reading, insertedAt, updatedAt,
  };

  books.push(newBook);

  const checkBook = books.find((book) => book.name === name);

  if (checkBook.name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku.' +
      'readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  });
  response.code(201);
  return response;
};

const getAllBooksHandler = (request, h) => {
  const newBook = books.map(({id, name, publisher}) => ({id, name, publisher}));

  const response = h.response({
    status: 'success',
    data: {
      books: newBook,
    },
  });
  response.code(200);
  return response;
};

module.exports = {addBookHandler, getAllBooksHandler};
