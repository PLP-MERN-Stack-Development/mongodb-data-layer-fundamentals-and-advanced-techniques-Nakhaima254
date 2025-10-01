// queries.js
// Run with: node queries.js

const { MongoClient } = require("mongodb");

async function main() {
  // Connection URL (Change this if using MongoDB Atlas)
  const uri = "mongodb://127.0.0.1:27017"; 

  // Database and Collection names
  const dbName = "plp_bookstore";
  const collectionName = "books";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log(" Connected to MongoDB");

    const db = client.db(dbName);
    const books = db.collection(collectionName);

  
    // Task 2: Basic CRUD
 

    console.log("\n Find all books in a specific genre (Software Engineering):");
    console.log(await books.find({ genre: "Software Engineering" }).toArray());

    console.log("\n Find books published after 2010:");
    console.log(await books.find({ published_year: { $gt: 2010 } }).toArray());

    console.log("\n Find books by a specific author (Robert C. Martin):");
    console.log(await books.find({ author: "Robert C. Martin" }).toArray());

    console.log("\n Update price of 'Clean Code':");
    await books.updateOne({ title: "Clean Code" }, { $set: { price: 29.99 } });
    console.log("Price updated!");

    console.log("\n Delete a book by title (Moby Dick):");
    await books.deleteOne({ title: "Moby Dick" });
    console.log("Book deleted!");

  
    // // Task 3: Advanced Queries
   

    // console.log("\n Books in stock and published after 2010:");
    // console.log(await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

    // console.log("\n Projection (only title, author, price):");
    // console.log(await books.find({}, { projection: { title: 1, author: 1, price: 1, _id: 0 } }).toArray());

    // console.log("\n Sort books by price ascending:");
    // console.log(await books.find().sort({ price: 1 }).toArray());

    // console.log("\n Sort books by price descending:");
    // console.log(await books.find().sort({ price: -1 }).toArray());

    // console.log("\n Pagination (first 5 books):");
    // console.log(await books.find().skip(0).limit(5).toArray());

    // console.log("\n Pagination (next 5 books):");
    // console.log(await books.find().skip(5).limit(5).toArray());

  
    // // Task 4: Aggregation
  

    // console.log("\n Average price of books by genre:");
    // console.log(await books.aggregate([
    //   { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    // ]).toArray());

    // console.log("\n Author with most books:");
    // console.log(await books.aggregate([
    //   { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
    //   { $sort: { totalBooks: -1 } },
    //   { $limit: 1 }
    // ]).toArray());

    // console.log("\n Group books by publication decade:");
    // console.log(await books.aggregate([
    //   { $project: { decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } } },
    //   { $group: { _id: "$decade", count: { $sum: 1 } } },
    //   { $sort: { _id: 1 } }
    // ]).toArray());

   
    // // Task 5: Indexing
  

    // console.log("\n Creating indexes...");
    // await books.createIndex({ title: 1 });
    // await books.createIndex({ author: 1, published_year: -1 });

    // console.log("\n Using explain() to show query performance with index:");
    // const explainResult = await books.find({ title: "Clean Code" }).explain("executionStats");
    // console.log(JSON.stringify(explainResult.executionStats, null, 2));

  } catch (err) {
    console.error(" Error:", err);
  } finally {
    await client.close();
    console.log("\n Disconnected from MongoDB");
  }
}

main();
