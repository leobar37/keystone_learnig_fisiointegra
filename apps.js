
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const  { NextApp}  = require('@keystonejs/app-next');
const authWithPassword =  require('./authAdmin');

// 
module.exports = [
    new GraphQLApp(), 
    new AdminUIApp({ name: process.env.APPNAME,  adminPath : '/admin'  , authStrategy : authWithPassword  }) ,
    new NextApp({dir :  'app'}),
]

