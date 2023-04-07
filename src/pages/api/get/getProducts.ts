import type { NextApiRequest, NextApiResponse } from 'next';
import { client, connectToDatabase } from '@/db/db';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectToDatabase();

  const collection = client.db().collection('products');
  const documents: Data[] = await collection.find().toArray();

  res.status(200).json(documents);
}
