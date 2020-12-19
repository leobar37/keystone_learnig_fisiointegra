require("dotenv").config();
const { distDir } = require("./config");
const keystone = require("./keystone");

const apps = require("./apps");
// lists

// keystone.createList('Todo' , Todo);
module.exports = {
  keystone,
  apps,
  distDir,
};
