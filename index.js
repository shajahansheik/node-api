const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
