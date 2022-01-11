/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next'
import category1 from 'mock-api/1.json'
import category2 from 'mock-api/2.json'
import category3 from 'mock-api/3.json'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  function SelectCategory() {
    if (id === '1') return category1
    if (id === '2') return category2
    if (id === '3') return category3
  }
  try {
    res.status(200).json(SelectCategory())
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler
