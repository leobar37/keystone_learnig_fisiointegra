
const { Keystone  } = require('@keystonejs/keystone');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');

// configuration database
const adapterConfig = { knexOptions: { connection: 'postgres://postgres:alfk3458@localhost/keystone' } };


// schemas import
const Post =  require('./lists/Post');
const Todo = require('./lists/Todo');
const Category  =  require('./lists/Category');
const Reserve = require('./lists/Reserve');
const User = require('./lists/User');

// create keystone instace
const keystone = new Keystone({
    adapter: new Adapter(adapterConfig),
    cookie: {
     secure : false
      // secure: process.env.NODE_ENV === 'production', // Default to true in production
      // // maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      // // sameSite: false,
    },
  });


  /// define lists
  keystone.createList('Post' ,  Post);
  keystone.createList('Category' ,Category);
  keystone.createList('Reserve' , Reserve)
  keystone.createList('User', User);
  
// authentication


module.exports =  keystone;

