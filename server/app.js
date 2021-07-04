const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
  console.log('Connected to database');
})

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(process.env.PORT, () => {
  console.log('GraphQL server listening on port 4000');
})