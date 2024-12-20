import mongoose from "mongoose";
import User from "./models/user_model.js";
import Product from "./models/product_model.js";
import Company from "./models/company_model.js";
import Location from "./models/locations_models.js";
import History from "./models/history_model.js";

// MongoDB connection URI
const MONGODB_URI = "mongodb://localhost:27017/inventory";

const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(MONGODB_URI, {});

    console.log("Connected to MongoDB");

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Company.deleteMany();
    await Location.deleteMany();
    await History.deleteMany();

    console.log("Existing data cleared");

    // Create users
    const users = await User.insertMany([
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "securepass",
        role: "admin",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        role: "user",
      },
      {
        name: "Jane Doe",
        email: "jane@example.com",
        password: "password123",
        role: "user",
      },
      {
        name: "Alice Smith",
        email: "alice@example.com",
        password: "password123",
        role: "user",
      },
      {
        name: "Bob Brown",
        email: "bob@example.com",
        password: "password123",
        role: "user",
      },
    ]);

    console.log("Users created");

    // Create companies
    const companies = await Company.insertMany([
      {
        name: "TechCorp",
        description: "Technology Company",
        createdBy: users[0]._id,
      },
      {
        name: "BizGroup",
        description: "Business Group",
        createdBy: users[0]._id,
      },
    ]);

    console.log("Companies created");

    // Create locations
    const locations = await Location.insertMany([
      {
        name: "Warehouse 1",
        description: "Main storage",
        createdBy: users[0]._id,
      },
      {
        name: "Office HQ",
        description: "Main Office",
        createdBy: users[0]._id,
      },
    ]);

    console.log("Locations created");

    // Create products
    const products = await Product.insertMany([
      {
        title: "Laptop",
        description: "High-performance laptop",
        serialNo: "12345ABC",
        createdBy: users[0]._id,
        manufacturer: companies[0]._id,
        model: "ProBook 450",
        dateOfPurchase: new Date(),
        warrantyMonths: 24,
        user: "admin",
      },
      {
        title: "Printer",
        description: "All-in-one printer",
        serialNo: "67890XYZ",
        createdBy: users[1]._id,
        manufacturer: companies[1]._id,
        model: "PrintMaster 3000",
        dateOfPurchase: new Date(),
        warrantyMonths: 12,
        user: "normal user",
      },
    ]);

    console.log("Products created");

    // Create history records
    const histories = await History.insertMany([
      {
        location: locations[0]._id,
        status: [{ name: "in use", date: new Date() }],
      },
      {
        location: locations[1]._id,
        status: [{ name: "not in use", date: new Date() }],
      },
    ]);

    console.log("History records created");

    console.log("Database seeding complete");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
