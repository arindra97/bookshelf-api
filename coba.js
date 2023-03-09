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
// const id = '_42Z8lwg9ergqT7a';

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
    'id': '_42Z8lwg9ergqT7ab',
    'name': 'Ini Buku baru Dicoding',
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
// const index = books.findIndex((n) => n.id === id);

const coba = 'dicoding';

const filterBook = books.filter((book) => book.name.toLowerCase()
    .includes(coba.toLowerCase()));

console.log(filterBook);

const books2 = [
  {
    'id': 'bJNWCj_7qvVgYgZE',
    'name': 'Buku A',
    'publisher': 'Dicoding Indonesia',
    'reading': 1,
  },
  {
    'id': 'B--rDvfqTHY8BpeX',
    'name': 'Kelas Dicoding',
    'publisher': 'Dicoding Indonesia',
    'reading': 0,
  },
  {
    'id': '1axzZka5HedbWHv-',
    'name': 'dicoding Jobs',
    'publisher': 'Dicoding Indonesia',
    'reading': 1,
  },
  {
    'id': 'GLiPv2ySSdWW2SxI',
    'name': 'Buku A',
    'publisher': 'Dicoding Indonesia',
    'reading': 1,
  },
];

const reading = 1;

const filterBook2 = books2.filter((book) => book.reading === reading);

console.log(filterBook2);

// const updatedAt = new Date().toISOString();
// const newBook = books.map(({id, name, publisher})
// => ({id, name, publisher}));

// books[index] = {
//   ...books[index],
//   name,
//   updatedAt,
// };

// console.log(books);

// books.splice(index, 2);

// console.log(books);
