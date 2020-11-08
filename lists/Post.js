const {  Text  , Uuid , Checkbox, Relationship, DateTime, CalendarDay } = require('@keystonejs/fields');
const { Markdown} = require('@keystonejs/fields-markdown');
module.exports = {
     fields: {
       title : { type :  Text , isRequired : true},
       content : {
             type : Markdown
      },
       ispublished : {  type : Checkbox , isRequired : true },
       extract : {
        type : Text,
        isMultiline : true        
      },
     categories : {
         type :  Relationship,
         ref:  'Category.posts',
         many :  false
     },
      testCalendar :{
             type : CalendarDay ,
      }
     },
     
}
