
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://rodricelis:${process.env.MONGODB_PASSWORD}@whizzlink-database.gtw1ubn.mongodb.net/?retryWrites=true&w=majority&appName=WhizzLink-database`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch (e) {
    console.error(e);
  }
}
