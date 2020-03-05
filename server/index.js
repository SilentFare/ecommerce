const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environmental variables from '.env' file
dotenv.config();
const app = require('./app');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('Database connected.'))
  .catch(error => console.error(error));

// Start Express server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}.`));
