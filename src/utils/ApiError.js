class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        statck=""
    ){
        //super is used to overite the constructor
        super(message) (parameter);statusCode:any
        this.statusCode=statusCode
        this.data=null//read about it
        this.message=message
        this.success=false//success code will not go,because we are handeling api errors not api response
        this.errors=errors
    

    if(statck){
        this.stack=statck
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
}
}
export {ApiError}