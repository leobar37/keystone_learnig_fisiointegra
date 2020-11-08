const { Text , Relationship  } =  require('@keystonejs/fields');

module.exports = {
      fields:  {
            name :  { 
                  type : Text,
                  isRequired : true
            },
            description : {
                 type : Text , 
                 isMultiline :  true
            },
            posts :  {
                 type : Relationship,
                 ref : 'Post.categories',
                 many : true
            }
      }
}



