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
|category|`[ObjectId]`|`false`|`true`| This an array of ids of categories a question belongs to. A question can belong to several categories e.g a category of [ 3, 4 ] means the question belongs to the categories with id 3 and 4 |

## Endpoints

### Categories
* #### GET /categories
This endpoints returns an array of all categories.
Sample requests `curl `
* #### GET /categories/:id
* #### GET /categories/:id/questions
* #### POST /categories
* #### DELETE /categories/:id
* #### PATCH /categories/:id


### Questions
* #### GET /questions
* #### GET /questions/:id
* #### POST /questions
* #### DELETE /questions/:id
* #### PATCH /questions/:id

### Play
* #### POST /play
