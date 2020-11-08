const { distDir}  = require('../config');
const WithSass   = require('@zeit/next-sass');
module.exports = {
     distDir :  `../${distDir}/www`,
     env : {
          // here enviroments
     }
}

module.exports =  WithSass({
    
})