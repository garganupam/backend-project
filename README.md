# backend-project
 cd.. karke bahr aate hain
npm init is used to install node package manager(package.json)
.gitkeep : empty file so that empty folder can be push on github otherwise empty folder are not pushed

.gitignore files can be copied from gitignore generator

.env files are used to generate the environment variables that should not be made public
src
main files should be index file as told in terminal at first

echo>"file name"  use to create file using terminal

nodemon is used to install because when we chnage something in backend we need to restart the server
npm install -D nodemon   D means dev dependency only,not for production

put nodemon in scripts as above

aslo env var. cannot be uploaded using module syntax es6 syntax is valid only

git status command is used to check the status of the code
do git add . at  the end when project is complete

# Controllers is used to create functionality and db is used that how to connect db

mkdir folderName # used to create folder

middleware is between frontend and backend and it checks that user should be accessible to  take info or not

#Prettier is used to install from npm so that file structure will be maintained

prettier ignore is used to made,in which files the prettier should not be implemented

main work is done on index file
# dotenv file is downloaded
# mongoose is used to connect witht the db
# app means backend is created through express

######2 imp. things

 try catch main wrap karo ya promises lo db se baat krte hue
 db is also in another continent mtlb ye hai ki time lgta hai,mtlb always use async await while talking to db

## we import env variables asap because we want env variables to load as soon as the first file is loading,so that every other file can get acces to it
on top : require ('dotenv').config({path:'./env'})
or
import dotenv from 'dotenv'

and at last 
dotenv.config({
path:'./env'
})
 add somethings on dev script check it out

 ##  app.use  we use when we need to do middleware or configuration settings

 make an express app in express

 npm i cookie-parser
 npm i cors

 apiResponse and apiError utility functions we are creating to give proper uniform response to all users

#### HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

##  npm i mongoose-aggregate-paginate-v2 is used to write aggregation queries

mongoose gives many middlewares to use.

## bcrypt package is used to hash passwords
*jwt is used to:

*JWT is commonly used for stateless authentication.
*After a user logs in, the server generates a JWT containing user-specific information (e.g., user ID, roles) and sends it back to the client.
*The client stores the JWT (typically in localStorage, sessionStorage, or a cookie) and includes it in subsequent requests (usually in the Authorization header).
*The server verifies the token to identify and authorize the user without requiring session storage.

mongoose provides middleware , and that contains hooks (pre and post hook), pre hook is used when we want to do something before saving the data on the server

##To upload files ,we use cloudinary and two packages installed multer/express-fileupload

#File upload technique:

we use multer to take that file from user and put it on the local storage then we will use cloudinary to take that file from loacal server and put it on to server
,we use 2 steps beacuse happens in production grade and if upload lacks in something then we will have another chance  to directly upload it from our local storage

multer use krke middleware,mtlb jhn jhn file upload capabilities ki jrurat hogi...vhn multer inject kar denge


####################################### https://turbo-spork-4ppv5wq9v54cq6x7-8000.app.github.dev/ #######################################################