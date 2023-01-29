import { MongoClient, Db } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"
import url from "url"
let cachedDb: Db

async function connectToDatabase(uri: string | undefined) {

    if (!uri) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env')
    }

    if (cachedDb) {
        return cachedDb
    }

    const client = await MongoClient.connect(uri)

    const dbName = url.parse(uri).pathname?.substring(1)

    const db = client.db(dbName)

    cachedDb = db

    return db
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const subscribersCollection = db.collection('subscribers')
        const eventsCollection = db.collection('events')

        await eventsCollection.deleteMany({})
        await subscribersCollection.deleteMany({})

        res.status(200).json({ message: 'All data deleted!' })
    }
}