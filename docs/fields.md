## calendarDay


stores an abstract day like a date but indepedant
of any time zone, Useful for Birthay and other all-days 
eventes always celebrated in the local time zone 

**simple usage:**


```js
const {Text , Password , CalendarDay}= require('@keystone/fields');

Keystone.createList('User' . {
     fields: {
          email :  { type :  Text} ,
          password : { type  : Password},
         lasOnline :  {
              type :  CalendarDay,
             dateFrom :  "2001-01-16",
             dateto :  "2020-05-20"
         }
     }
})
```

### config

**dateFrom:**
 the calendarDay field  can enforce 
 selected days tro conform to a specific 
 date range dateFrom represent the start of range and earliest 
 that can be selected *dateFrom can be provided without dateTo option*
 
 >  however, where a `dateTo` is provided, the `dateFrom` value must be equal to or earlier than the `dateTo` value.

**dateTo:**
represents the end of range 
and the least date that can be selected 



#### note:

`calendarDay` fields use the `String` type in `graphql`

> consult documentations for filters


# checkbox

the `checkBox` field type stores a single
boolean value

```js
const { Checkbox, Text } = require('@keystonejs/fields');

keystone.createList('Products', {
  fields: {
    name: { type: Text },
    isEnabled: { type: Checkbox, isRequired: true },
  },
});

```

# DateTime : 

stores a point in time zone offset

```js
 const { DateTime}  = require('@keystone/fields')

keystone.createlist('User' , {
     fields :{
          lastOnline : {
                 type : DateTime., 
                 format : 'dd/MM/YYYY HH:mm 0',
                 yearRangeFrom  : 1901,
                 yearRangeTO :  2018,
                yearPickerType : 'auto'
          }
     }
})
}

```
(more information for unicode)[https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table]

**yearRangeFrom:**
the Datetime component include an input that 
allows the user to change the current 
year from a range of options
*this prop allows the user to set beginning of that range*
**yearRangeTo:**

This prop allows the user to set the end of that range.

**auto:**
generara una selección si el rango es 50 o menos, de lo
contrario generará una entrada

# **Decimal:**

```js
keystone.createList('Payment', {
  fields: {
    timestamp: { type: DateTime },
    description: { type: Text },
    amount: { type: Decimal },
  },
});


```
# File

support files hosted in range of different conteext,
in the local filesystem o on a cloud file server

**File adapters:**

- LocalFileAdapter: 

```js
const fileAdapter = new LocalFileAdapter({
  src: './files',
  path: '/files',
});

```

# password

`password:` fields are  unusual in that 
they do not store the value they are supplied 
The value is run through the bcrypt algorithm to generate a hash which is stored instead|

# Relationship

a link between the current lis and others, often 
paired with a field on other list 

```js
const {  RelationShip , Text}  = requiere('@keystonejs/fields');
keystone.crateList('User' , {
     
     fields: {
          name : { Type :  Text},
         posts : {  type : Relationship ,  ref : 'Post' , many : true}
     }
})


keystone.createList('Post', {
  fields: {
    title: { type: Text },
  },
});
```
# select 

stores one severeal predifined string values, Presented as 
dropdown in the Admin Ui
```js
 const { Select } = require('@keystonejs/fields');
 keystone.createList('orders' . {
      fields: {
           status  : {
                  type : Select , options :  'pending,processed'
           }
      }
 })

```

**options**: 


- a comma-separates list of values eg:  'Pending, Processed, Errored',
- and array of String , eg  : ['ready', 'send' , 'deleted'],
- an array ob objects, each specifiying an `value` and `label`, eg:

```js
 const  options = [
        { value : 'yes' , label  :'aceppt , lorem ipus'},
        { value : 'NO' , label : 'Sorry I can,t make it : ('},
        { value :  'maybe' , label :  'Not sure yet'}
 ]
```
**Datatype:**

El campo `select` can store its value any ot the three following types
- enum ,
- string ,
- integer 

**slug:**

generate unique slugs (aka keys / url) based on the items 
data 

> (*slugify:*)[https://www.npmjs.com/package/slugify] 

```js
var slugify = require('slugify')
 
slugify('some string') // some-string
 
// if you prefer something other than '-' as separator
slugify('some string', '_')  // some_string
```

you can generate slug with follow below example:

```js
keystone.createList('Post', {
  fields: {
    title: { type: Text },
    postedAt: { type: DateTime },
    url: {
      type: Slug,
     generate : ({ resolveData}) => slugify(resolveData.title + '-' +  resolveData.postedAt )
  },
});
```
**specify slug a field:**

```js
const { Slug, Text } = require('@keystonejs/fields');
const { Keystone } = require('@keystonejs/keystone');

const keystone = new Keystone(/* ... */);

keystone.createList('User', {
  fields: {
    username: { type: Text },
    url: {
      type: Slug,
      from: 'username',
    },
  },
});
```

# text 

a basic but versatile text field of arbitrary lenght

```js
const { Text} = require('@keystonejs/fields');
keystone.createList('Product', {
       fields: {
            description :  { type :  Text  , isMultiline: false}
       }
})
``` 

## unplash images 

```js
const { Keystone } = require('@keystonejs/keystone');
const { Unsplash } = require('@keystonejs/fields-unsplash');

const keystone = new Keystone({...});

keystone.createList('Post', {
  fields: {
    heroImage: {
      type: Unsplash,
      accessKey: '...', // Get one from https://unsplash.com/developers
      secretKey: '...',
    },
  },
});
```

**Unplah block:**
the unplash fields exposes a block 
that exposes a block that can be used 
in the content field

**follow this example**


```js
const { Keystone } = require('@keystonejs/keystone');
const { Content } = require('@keystonejs/fields-content');
const { Unsplash } = require('@keystonejs/fields-unsplash');
const { Text } = require('@keystonejs/fields');

keystone.createList('Post', {
  fields: {
    body: {
      type: Content,
      blocks: [
        Content.blocks.heading,
        [
          Unsplash.blocks.unsplashImage,
          {
            attribution: 'KeystoneJS',
            accessKey: process.env.UNSPLASH_ACCESS_KEY,
            secretKey: process.env.UNSPLASH_SECRET_KEY,
          },
        ],
      ],
    },
  },
})

```

## uuid 


```js
const { Uuid, Text } = require('@keystonejs/fields');

keystone.createList('Products', {
  fields: {
    name: { type: Text },
    supplierId: { type: Uuid, caseTo: 'upper' },
  },
});


```


## markdown
`npm install @keystone/fields-markdown`


```js
const { Markdown } = require('@keystonejs/fields-markdown');
keytone.createList('Post' , {
     fields: {
         content : {
              type  :  Markdown
         }
     }
})

```