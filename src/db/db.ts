import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://bhimiaadmin:BJJ1lne1Yj7O6R2b@cluster0.bxrilfs.mongodb.net/bhimia';

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
