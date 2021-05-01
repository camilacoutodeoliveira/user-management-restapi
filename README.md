<h1 align="center"> User-Management-Restapi-Users</h1><br>
<p align="center">
 <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
 <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
 <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
 <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
 <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
 <img alt="Udemy" src="https://img.shields.io/badge/Udemy-%23EA5252.svg?&style=for-the-badge&logo=Udemy&logoColor=white"/>
</p>


## 💻 Project
This project corresponds a API developed in Node.js


### Installation
```
npm install
```

### Provides methods to specify which function is called when an HTTP request arrives (GET, POST, SET, etc.)
```
npm install express --save
```

### Monitors all changes in your application files and automatically restarts the server
```
npm install nodemon -g
```

### Package Manager
```
npm install consign --save
```

### Module capable of converting the request body to various formats
```
npm install body-parser --save
```

### Database that does not need installation, works in json format and very fast!!!
```
npm install nedb --save
```

### Library that can be used in Node.js with express, to perform the validation of the input data in the AP
```
npm install express-validator --save
npm i express-validator@5.3.1
```

### Exciting server
```
npm start
```
## Routes
Get all users:
```
GET /users
```
Example result:
```json
{
    "users":[]
}
```

Register a new user:
```
POST /users
```
Example result:
```json
{
    "_id":"vjwUihfiqbhPieF4",
    "name":"Camila Couto"
}
```

Get data from a user:
```
GET /users/:id
```
Example result:
```json
{
    "_id":"vjwUihfiqbhPieF4",
    "name":"Camila Couto"
}
```

Edit a user:
```
PUT /users/:id
```
Example result:
```json
{
    "_id":"vjwUihfiqbhPieF4"
}
```

Delete a user:
```
DELETE /users/:id
```
Example result:
```json
{
    "_id":"vjwUihfiqbhPieF4"
}
```

## 🤝Thanks
This project was developed based on the Complete JavaScript Course with ♥ [HCode](https://hcode.com.br/)/[Udemy](https://www.udemy.com/course/javascript-curso-completo/)
