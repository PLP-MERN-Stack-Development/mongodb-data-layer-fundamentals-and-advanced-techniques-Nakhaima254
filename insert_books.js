// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  }, //book 1

  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  }, //book 2

  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  }, //book 3

  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  }, //book 4

  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  }, //book 5

  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  }, //book 6

  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  }, //book 7

  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  }, //book 8

  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  }, //book 9

  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }, //book 10


  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  }, //book 11

  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }, //book 12
 
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Software Engineering",
    published_year: 2008,
    price: 35.50,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  }, //book 13

  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    genre: "Software Engineering",
    published_year: 1999,
    price: 42.00,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  }, //book 14

  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    genre: "Software Engineering",
    published_year: 1994,
    price: 55.99,
    in_stock: false,
    pages: 395,
    publisher: "Addison-Wesley"
  }, //book 15

  {
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    genre: "Software Engineering",
    published_year: 1999,
    price: 47.25,
    in_stock: true,
    pages: 448,
    publisher: "Addison-Wesley"
  }, //book 16


  {
    title: "Code Complete",
    author: "Steve McConnell",
    genre: "Software Engineering",
    published_year: 2004,
    price: 50.00,
    in_stock: true,
    pages: 960,
    publisher: "Microsoft Press"
  }, //book 17

  {
    title: "Working Effectively with Legacy Code",
    author: "Michael C. Feathers",
    genre: "Software Engineering",
    published_year: 2004,
    price: 39.95,
    in_stock: false,
    pages: 456,
    publisher: "Prentice Hall"
  }, //book 18

  {
    title: "Continuous Delivery",
    author: "Jez Humble and David Farley",
    genre: "Software Engineering",
    published_year: 2010,
    price: 49.99,
    in_stock: true,
    pages: 512,
    publisher: "Addison-Wesley"
  }, //book 19

  {
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    genre: "Software Engineering",
    published_year: 1975,
    price: 30.00,
    in_stock: true,
    pages: 322,
    publisher: "Addison-Wesley"
  }, //book 20

  {
    title: "Software Engineering at Google",
    author: "Titus Winters, Tom Manshreck, Hyrum Wright",
    genre: "Software Engineering",
    published_year: 2020,
    price: 44.00,
    in_stock: true,
    pages: 600,
    publisher: "O'Reilly Media"
  }, //book 21

  {
    title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    author: "Eric Evans",
    genre: "Software Engineering",
    published_year: 2003,
    price: 59.99,
    in_stock: true,
    pages: 560,
    publisher: "Addison-Wesley"
  }, //book 22

];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 