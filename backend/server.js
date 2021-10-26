const express = require('express')
const app = express()

const PORT = 1337  // Obs! Fungerar bara lokalt!

// Middleware - TODO
// Exempel: static folders, logger

// Endpoints
// app.use om vi har en separat router-fil
app.get('/', (req, res) => {
	console.log('Server received GET request /');
	res.status(200).send('Server is online')
})
const animalsData = ['Hund', 'Katt', 'Grävling', 'Orm', 'Älg']
app.get('/animals', (req, res) => {
	res.send(animalsData)
})

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
})
