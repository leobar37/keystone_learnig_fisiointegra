# configure relationships

a relatuionship in keystone exists between two lists
. In our blog the concept of authorship(who write a post)


## one sided 

is we want to know who the author of a post is, but 
we are not interesed in queryng for all the post 
written by a given user can setup up a 
one-sided relationship as follow 

```js
Keystone.createList('User' , {  fields : {  name : {  type : Text}}});

keystone.createList('Post' ,{ 
     fields: {
          title : { type :  Text} ,
         content  : {  type :  Text , isMultiline : true},
          author : {  type :  Relationship , ref : 'User' , many :  false}
     }
})

```
**graphql**


```js
  query{
       allPosts{
             title 
             content
             author{
                  name
             }
       }
  }
```

## two side


is we also want to access all the posts written by a user
then we need use two sided relationship

```js
Keystone.createList('User' , {  fields : {  name : {  type : Text}  , posts :  { type : Relationship , ref:  'Post.author' , many  : true} });

keystone.createList('Post' ,{ 
     fields: {
          title : { type :  Text} ,
         content  : {  type :  Text , isMultiline : true},
          author : {  type :  Relationship , ref : 'User.posts' , many :  false}
     }
})
```

**graphql:**

```js
Query{
    ##  two sided  
     allUsers{
           name 
           ##  get all posts wirth their respective  author
           posts{
                title
                conten
           }
     }
}
```

# self-referential lists

it is also possible to define relationship 
which refer to the same list

**example:**

```js
keystone.createUser('User', {
    fields :{
          name : { type : Text},
          follows :{  type : Relationship ,  ref : 'User'  , many}
    }
})
// this one-sided relationship allows us to keep trach of who each 
// is following
```
**two side**

we could turn this in a two-sided relationship 
to also access the followers of each 
user 


```js
keystone.createUser('User', {
    fields :{
          name : { type : Text},
          follows :{  type : Relationship ,  ref : 'User.followers'  , many :true},
          followers : { type : Relationship  , ref : 'User.folow' , many : true}
    }
})

```

# cardinality 

## one-ton-many

```js
keystone.createList('User', {
  fields: {
    name: { type: Text },
  },
});

keystone.createList('Post', {
  fields: {
    title: { type: Text },
    content: { type: Text },
    author: { type: Relationship, ref: 'User', many: false },
  },
});

```

# many-to-many

each post has multipe authors, and each user can have multiple 
posts, however we cannot directly acces users posts 

```js
keystone.createList('User', {
  fields: {
    name: { type: Text },
  },
});

keystone.createList('Post', {
  fields: {
    title: { type: Text },
    content: { type: Text },
    authors: { type: Relationship, ref: 'User', many: true },
  },
});


```

# Many-to-many

```js
keystone.createList('User', {
  fields: {
    name: { type: Text },
    posts: { type: Relationship, ref: 'Post.authors', many: true },
  },
});

keystone.createList('Post', {
  fields: {
    title: { type: Text },
    content: { type: Text },
    authors: { type: Relationship, ref: 'User.posts', many: true },
  },
});


```