import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

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

    if (req.method === 'POST') {
        const { eventName, eventDate } = req.body

        const db = await connectToDatabase(process.env.MONGODB_URI)

        const collection = db.collection('events')

        await collection.insertOne({
            name: eventName,
            date: eventDate
        })

        res.status(201).json({ message: 'Event inserted!' })
    }

    if (req.method === 'GET') {
        const db = await connectToDatabase(process.env.MONGODB_URI)

        const collection = db.collection('events')

        const events = await collection.find({}).toArray()

        res.status(200).json(events)
    }
}
