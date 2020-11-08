const { Text , Password  , Checkbox} =  require('@keystonejs/fields');

// user schema
module.exports = {
  fields :{
      username : {  
          type : Text ,
          isRequired : true
      },
    email : {
         type : Text,
         isRequired : true
    },
     password : {
        type : Password,
        isRequired : true
     },
     isAadmin:{
        type : Checkbox, 
        defaultValue : false
     }
  
  }
}