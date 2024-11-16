const express = require('express');
const app = express();

// Sample data
const rideRecords = [
  { email: 'a@gmail.com', date: '10/11/2024' },
  { email: 'Pa@gmail.com', date: '11/11/2024' },
  { email: 'cca@gmail.com', date: '10/12/2024' }
];



// GET endpoint to retrieve all products
app.get('/rides', (req, res) => {
  res.json(rideRecords);
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});