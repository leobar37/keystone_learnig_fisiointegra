const { Keystone } = require("@keystonejs/keystone");
const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const { createItems } = require("@keystonejs/server-side-graphql-client");

// configuration database
const adapterConfig = {
  knexOptions: {
    connection: "postgres://leobar37:alfk3458@bd/keystone",
  },
};

// schemas import
const Post = require("./lists/Post");

const Category = require("./lists/Category");
const Reserve = require("./lists/Reserve");
const User = require("./lists/User");

// create keystone instace
const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: async (keystone) => {
    await createItems({
      keystone: keystone,
      listKey: "User",
      items: [
        {
          data: {
            username: "leobar37",
            email: "usatloqueando@gmail.com",
            password: "alfk3458",
            isAadmin: true,
          },
        },
      ],
    });
  },
  cookie: {
    secure: false,
    secure: process.env.NODE_ENV === "production", // Default to true in production
    // maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    // sameSite: false,
  },
  cookieSecret:
    "18801ee89493dd28a3579a3e9b1d6b0b99b11976d8cc410cfaf3ac70fbeb923c",
});

/// define lists
keystone.createList("Post", Post);
keystone.createList("Category", Category);
keystone.createList("Reserve", Reserve);
keystone.createList("User", User);

// authentication

module.exports = keystone;
