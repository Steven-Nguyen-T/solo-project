const express = require('express');
const app = express();
const path = require('path')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

const Food = require('./models/foodModel');
const foodController = require('./controllers/foodController');
const { nextTick } = require('process');

const port = '3000';

// parses json data sent from client side to server side using body parser module
app.use(express.json());
// app.use(bodyParser.json())

const db = 'mongodb+srv://steven:edwin@cluster0.tleo6.mongodb.net/favFoods?retryWrites=true&w=majority';

mongoose.connect(db, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'favFoods'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
// require routers
// const db = 'mongodb+srv://steven:leaf@cluster0.xzdhs.mongodb.net/favFoods?retryWrites=true&w=majority';

app.use(
  cors({
    origin: 'http://localhost:8080',
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
)


app.get('/', express.static('client'));
console.log('received get request to home route')

app.use('/build', express.static(path.join(__dirname, '../build')))


app.get('/foods/:id', foodController.getOneFood, (req, res) => {
  res.status(200).json(res.locals.foods);
})

app.get('/foods', foodController.getFood, (req, res) => {
  res.status(200).json(res.locals.foods);
})

// app.get('/allFoods', foodController.getFood, (req, res) => {
//   res.status(200).json(res.locals.foods)
// })

app.post('/foods', foodController.createFood, (req, res) => {
  res.status(200).json(res.locals.foods);
})

app.put('/foods/:id', foodController.updateFood, (req, res) => {
  res.status(200).json(res.locals.foods)
})

app.delete('/foods/:id', foodController.deleteFood, (req, res) => {
  res.status(200).json(res.locals.foods)
})


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log('listening on port ' + port)
})