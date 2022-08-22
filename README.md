# Trivia API
A nodejs based trivia api

## Getting started

### Starting the app

* To run this app locally, you're expected to have Nodejs already installed on your device. 
From the root directory run the following commands to install all the project dependencies.
```bash
npm install 
```
* To run the app in development, run 
```bash
npm run dev 
```
Running the app in development allows you to have hot reloads. i.e reload on save.

* To start the app in production, simply run
```bash
npm run dev 
```

### Environment variables
You are required to specify the following environment variables to run the app successfully. You can specify these variables in a .env file or via shell.
```.env
MONGO_URI = <your-mongodb-uri> 
```

## Data models
The data models represented below are modelled using mongoose.

### Categories
|Title|Type|Unique|Required|Description|
|----|---|---|---|---|
|name|`String`|`true`|`true`| This name of the category e.g Science|

### Questions
|Title|Type|Unique|Required|Description|
|----|---|---|---|---|
|description|`String`|`false`|`true`| This is content or body of the question. |
|category|`ObjectId`|`false`|`true`| This is the id of the category the question belongs to. |

## Endpoints

### Categories
* #### GET /categories
This endpoints returns an array of all categories.
Sample response 

```json
{

"categories" : [
{ "_id" : "2", "name" : "Science" },
{ "_id" : "6", "name" : "Art" }
], 
"success" : true
}
```

* #### GET /categories/:id
This endpoint returns a single category
Sample response

```json
{
"category" : { 
"_id" : "2",
"name" : "Science" 
} 
"success" : true
}
```

* #### GET /categories/:id/questions
It returns all questions under this category

```json
{
"questions" : [
{ "_id" : "2", "description" : "Who is the president of Nigeria", "category" : "7" },
{ "_id" : "5", "description" : "When was Nigeria's independence", "category" : "7" } 
],
"success" : true
}
```
* #### POST /categories
It takes in a name property. 

Sample request payload
```json
{ 
"name" : "Geography"
}
```

Sample response
```json
{ 
  "category" : { "_id" : "4", "name" : "Geography" },
  "success" : true
}
```

* #### DELETE /categories/:id
Deletes the category with an id of :id

Sample response
```json
{ 
  "deleted" : 5,
  "success" : true
}
```

* #### PATCH /categories/:id
Edits a categories name

Sample request payload
```json
{ 
"name" : "Geography"
}
```

Sample response
```json
{ 
  "category" : { "_id" : "4", "name" : "Geography" },
  "success" : true
}
```


### Questions
* #### GET /questions
* #### GET /questions/:id
* #### POST /questions
* #### DELETE /questions/:id
* #### PATCH /questions/:id

### Play
* #### POST /play
