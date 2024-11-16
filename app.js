const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

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


// POST endpoint to create a new test ride
app.post('/rides', (req, res) => {

  const emailId = req.body.email;
  const rideRec = rideRecords.find(p => p.email === emailId);

  if (rideRec) {
    console.log('Error:: Ride record found with emailID: ', emailId);
    res.status(409).json({error: "EmailID already exists! Please use diffrent emailID."});
  } else {

	  // Assuming request body contains ride data
	  const newRide = {
	  	email: req.body.email,
	  	date: req.body.date 
	  };

	  // Add new product logic here (e.g., assign an ID, save to database)
	  rideRecords.push(newRide);
	  res.status(201).json(newRide);
  }
});


// GET endpoint to retrieve a specific test ride by email
app.get('/rides/:email', (req, res) => {
  const emailId = req.params.email;
  const rideRec = rideRecords.find(p => p.email === emailId);

  if (rideRec) {
    res.json(rideRec);
  } else {
    res.status(404).json({ message: 'Ride request not found' });
  }
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

