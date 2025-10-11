const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`);

let users = [
  { id: 1, name: "Vilson", email: "vilson@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" }
];

const root = {
  users: () => users,
  user: ({ id }) => users.find(u => u.id == id),
  createUser: ({ name, email }) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
  }
};

module.exports = { schema, root };
