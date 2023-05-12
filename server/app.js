const express = require('express');
const cors = require('cors');


const app = express();

const port = process.env.PORT || 3000;

const cardRouter = require('./routers/card');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(cardRouter);

app.listen(port, () => {
    console.log('Server is listening on port ', process.env.PORT, port);
})
