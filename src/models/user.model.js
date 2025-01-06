import mongoose,{Schema} from 'mongoose'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true //to enable the searching field
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:String,//aws ki trh hi service hai jo images ,files vgera use karke url de deta hai (cloudinary url)
            required:true

        },
        coverImage:{
            type:String
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required']

        },
        refreshToken:{
            type:String
        }

   },
   {
    timestamps:true
   }
)
//Password encryption
userSchema.pre("save", async function(next) {
    if(!this.isModified("password"))
        return next();
    this.password=bcrypt.hash(this.password,8)
    next()

})

//Custom methods design

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password) //arguments: the password you sent and the this.password is the encrypted password

}

//also we can generate access token method by this

userSchema.methods.generateAccessToken=function(){//returns the access token when it is created
     return jwt.sign(
        {
            _id:this._id ,  //get it from db
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id ,  //get it from db
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}



export const User=mongoose.model("User",userSchema)//mongodb main User ,users name se save hoga