const mongoose=require("mongoose");
const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://nike:nike@cluster0.lpebv.mongodb.net/dbsdata?retryWrites=true&w=majority"
    );
};
module.exports=connect;