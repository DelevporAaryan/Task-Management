const mongoose = require("mongoose");
const Task = require("./models/Task"); // Adjust if your model file name is different
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected...");
}).catch(err => console.log(err));

// Sample Tasks
const sampleTasks = [
    { title: "Learn MongoDB", description: "Study Mongoose and MongoDB basics", completed: false },
    { title: "Build a Task Manager", description: "Complete backend and frontend integration", completed: false },
    { title: "Deploy Project", description: "Push the project to GitHub and deploy", completed: false }
];

// Insert Data into Database
const insertData = async () => {
    try {
        await Task.deleteMany(); // Clears existing data (optional)
        await Task.insertMany(sampleTasks);
        console.log("Sample Data Inserted! ✅");
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

insertData();
