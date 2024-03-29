var mongoose=require('mongoose')

module.exports.connectDB=async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            //useNewUrlParser:true,
            //useUnifiedTopology:true
        })
        console.log(`MongoDB connected : ${connect.connection.host}`);
    }
    catch(err){ 
        console.log(err);
    }
}

