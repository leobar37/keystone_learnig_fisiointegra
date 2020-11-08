const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const keystone  = require('./keystone');
const  authStrategy = keystone.createAuthStrategy( {
    type  : PasswordAuthStrategy,
    list  : 'User',
    config : {
       identityField:  'username' ,
        secretField : 'password'
    },
 })

 module.exports =  authStrategy;