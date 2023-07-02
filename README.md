# [Simple CRUD API](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md)

To launch in developer mode - copy to your command line:

```git clone git@github.com:sanich123/simple-crud-api.git project&&cd project&&npm i&&npm run dev```


Then using Postman (or any tool you have) you can send requests to 

```http://localhost:3000```

The service have two endpoints:

```http://localhost:3000/api/users```:

GET returns all the users (an empty array on launching the app)

POST with body required fields create a new user

```http://localhost:3000/api/users/${id}```

GET returns user with id

PUT with body changes user with id

DELETE delete user with id



