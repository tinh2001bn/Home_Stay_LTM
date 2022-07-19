const bcrypt = require("bcryptjs");

const users = [
    {
      name: "Admin",
      email: "adminnhom14@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    {
      name: "User",
      email: "user1@gmail.com",
      password: bcrypt.hashSync("123456", 10),
    },
    {
      name: "User",
      email: "user2@gmail.com",
      password: bcrypt.hashSync("123456", 10),
    },
    {
      name: "User",
      email: "user3@gmail.com",
      password: bcrypt.hashSync("123456", 10),
    },
    {
      name: "User",
      email: "user@gmail.com",
      password: bcrypt.hashSync("123456", 10),
    },
    {
      name: "User",
      email: "user4@gmail.com",
      password: bcrypt.hashSync("123456", 10),
    },

  ];
module.exports = users;