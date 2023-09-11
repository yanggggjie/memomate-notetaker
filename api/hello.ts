import { VercelRequest, VercelResponse } from '@vercel/node'
import client from '../api_utils/mongodb.js'

export default async function (req: VercelRequest, res: VercelResponse) {
  await client.connect()
  const database = client.db('test')
  const collection = database.collection('my test')

  const data = await collection
    .find({
      user_age: '10',
    })
    .toArray()
  res.send({
    data,
  })
}
