# hooks

hooks give developers a way to add custom logic to the 
framework of lists, fields and operations keystone provides

this document provides an overview of the concepts, patterns
and function of the keystone hook system 

## stage 

keystone define severeal stages within the hook execution order

* input resolution :  modify the values supplied 
* data validation  :  check the values are valid 
* before operation :  perform side effect before the primary operation
* after operation :  perform side effects after the primary operation


## operation: 

create
update
delete
authenticate
unauthenticate

# hook type

Un tipo de gancho se define por el 
lugar donde se adjunta, keystone reconce 
three types of hooks

**fiel type hooks:**
Field type hooks are associated with particular field
and are applied to all fields of that type across 
all list 

**Field hooks:**

field hooks can be defined by the app developer 
specifyng the hooks attribute of the field configuration
when calling `createList()`
**list hooks:**
list hooks can be defined by the app developer by specifyng 
the hooks attribute of a list configuration when callig 
`createlist()`

**example:**
```js
keystone.createList('User' , {
       fields :{
             name : { type : Text}
       },
       hooks: {
            /// hooks for create and update operations 
            resolveInput  :  async (...) =>{
                 
            },
            validateInput : async (...)=>{

            },
            beforeChange : asyc (...)=>{
                 
            }
            afterChange : async (...) =>{
                 
            }
            // hooks for delete operations
            validateDelete : async (...)=> {...},
            beforeDelete : async (...)=> {...},
            afterDelete : async (...)=>{...}
       }

})


```
### Field hooks 
```js
keystone.createList('User' , {
       fields :{
             name : { type : Text , 
              hooks: {
            /// hooks for create and update operations 
            resolveInput  :  async (...) =>{
                 
            },
            validateInput : async (...)=>{

            },
            beforeChange : asyc (...)=>{
                 
            }
            afterChange : async (...) =>{
                 
            }
            // hooks for delete operations
            validateDelete : async (...)=> {...},
            beforeDelete : async (...)=> {...},
            afterDelete : async (...)=>{...}
       }},
             
       },
      

})


```

## Field Type hooks

learnig this after custom field type guide read


# arguments


#### operation :  
  the operationn being perfomed (ie, `create` or `update`)
#### existingItem :  
  
  the currente stored item ( or `undefined` for `create` operations)

#### originalInput :
 the data received by the Graphql mutation

 ### resolveData
  
  the data received by the Graphql mutation

  ### context 
  
  the apollo context object for this request

  ### fielPath 
  the path for the field being operated (on applicable to 
  field hooks only)