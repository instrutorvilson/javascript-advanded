const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./schema');

const app = express();
app.use(cors());


app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Servidor GraphQL rodando em http://localhost:4000/graphql');
});
