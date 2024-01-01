const mongoose=require("mongoose");
const mongoURI=process.env.MONGODB_URI;
mongoose.connect(`${mongoURI}gofood`);

const database = mongoose.connection;

database.on('error', console.error.bind(console, "Error connecting to MongoDB"));

database.once('open', async function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = database;