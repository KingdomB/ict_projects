import express from 'express';
const port = 5000
const app = express()

app.get('/', (req, res) => {
  res.send('Server res.')
})

app.post('/registration', (req, res) => {
  console.log(req.body);
  res.send("Received.")
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
})