import mongoose from "mongoose";

var mongoURL = 'mongodb+srv://RVArtist:Beg1nnew1@cluster0.6ov323r.mongodb.net/woodfire-pizza'

mongoose.connect(mongoURL, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURL);
})

db.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
})

export default mongoose;