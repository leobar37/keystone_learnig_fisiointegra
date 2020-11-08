const  { Text , Integer ,  DateTime }  =  require('@keystonejs/fields');


module.exports = {
    fields: {
        name :{ 
            type : Text
        },
        lastName : {
              type :  Text
        },
        email :{
             type : Text
        },
        phone :{
            type :  Text   
        },
        description: {
          type : Text   
        },
        hourCall : {
            type : DateTime,
            format: "HH:mm" 
        },
        timestamp :{
             type: Integer
        }

    }
}