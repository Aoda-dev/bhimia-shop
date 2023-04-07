import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { client, connectToDatabase } from '@/db/db';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  await connectToDatabase();

  const product = await client
    .db()
    .collection('products')
    .findOne({ _id: new ObjectId(id as string) });

  if (!product) {
    res.status(404).json({ message: 'Товар не найден' });
  } else {
    res.status(200).json(product);
  }
}
