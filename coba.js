// const {nanoid} = require('nanoid');

// // const pageCount = 10;
// // const readPage = 10;

// // const finished = pageCount === readPage;
// const books = [];
// // console.log(finished);

// const name = 'Gamma';
// const year = 2023;
// const author = 'Gamma';
// const summary = 'Gamma';
// const publisher = 'Gamma';
// const pageCount = 1000;
// const readPage = 800;
// const reading = true;


// const id = nanoid(16);
// const finished = pageCount === readPage;
// const insertedAt = new Date().toISOString();
// const updatedAt = insertedAt;

// const newBook = {
//   id, year, author, summary, publisher,
//   pageCount, readPage, finished, reading, insertedAt, updatedAt,
// };

// books.push(newBook);

// const isNameFound = books.find((book) => book.name === name);

// if (isNameFound !== undefined) {
//   console.log(isNameFound);
// } else {
//   console.log('Nama tidak ditemukan');
// }
const books = [
  {
    'id': '_42Z8lwg9ergqT7a',
    'name': 'Ini Buku baru 2',
    'year': 2023,
    'author': 'Gamma',
    'summary': 'Buku ini menceritakan tentang',
    'publisher': 'Gramedia 2',
    'pageCount': 1000,
    'readPage': 800,
    'finished': false,
    'reading': true,
    'insertedAt': '2023-03-08T16:54:20.684Z',
    'updatedAt': '2023-03-08T16:54:20.684Z',
  },
  {
    'id': '_42Z8lwg9ergqT7a',
    'name': 'Ini Buku baru',
    'year': 2023,
    'author': 'Gamma',
    'summary': 'Buku ini menceritakan tentang',
    'publisher': 'Gramedia',
    'pageCount': 1000,
    'readPage': 800,
    'finished': false,
    'reading': true,
    'insertedAt': '2023-03-08T16:54:20.684Z',
    'updatedAt': '2023-03-08T16:54:20.684Z',
  },
];

const newBook = books.map(({id, name, publisher}) => ({id, name, publisher}));

console.log(newBook);
