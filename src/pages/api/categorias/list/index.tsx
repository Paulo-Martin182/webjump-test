/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next'
import category from 'mock-api/list.json'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(category)
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler
