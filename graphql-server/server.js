const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const db = require('./db');

const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf-8'}));
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({ typeDefs, resolvers });


const port = 9000;
const jwtSecret = 'TopSecret123';

const app = express();
apolloServer.applyMiddleware({app, path: '/graphql'});

app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  algorithms: ['RS256'],
  credentialsRequired: false
}));

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  const user = db.users.list().find((user) => user.email === email);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({sub: user.id}, jwtSecret);
  res.send({token});
});

app.get("/", (req, res) => {
  res.write("Good Day!!");
  res.end();
})

app.listen(port, () => console.info(`Server started on port ${port}`));