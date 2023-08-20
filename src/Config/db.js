import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://hariomchouhan:socialmedia123@cluster0.fqpvlcm.mongodb.net/fileSharing?retryWrites=true&w=majority`
const ConfigureDb = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(url, {useUnifiedTopology: true});
        console.log('Db Connected!');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default ConfigureDb;