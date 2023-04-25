import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://tiemirlan2004:TemirlanAsan2004@cluster0.f0l8vno.mongodb.net/bhimia';

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export { client, connectToDatabase };
