import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) throw new Error("MONGODB_URI is missing");
if (!dbName) throw new Error("DB_NAME is missing");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let isConnected = false;

export const connect = async (collectionName) => {
  if (!isConnected) {
    await client.connect(); 
    isConnected = true;
  }

  return client.db(dbName).collection(collectionName);
};
