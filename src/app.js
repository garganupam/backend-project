import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
      //tells that from where the req to backend is accepted
}))
//3 major confiuration

app.use(express.json({limit:"16kb"})) //ability of backend to take the json filesapp.use()
app.use(express.urlencoded({extended:true,limit:"16kb"}))//certain characters are there in url which are encoded to other characters
app.use(express.static("public"))//kei bar files filder store kena chahta hu mere hi server pr.public assets jo koi b access kar skta hai

//cookie parser ka kam hai ki user k browser pr server se crud operations perform kar paun
app.use(cookieParser())

export {app}
