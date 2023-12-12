import Book from '../../models/book'
import { type Request, type Response } from 'express'

export default async function bookRemove (req: Request, res: Response) {
  const fromId = parseInt(req.params.id ?? '0')

  const book = await Book.findOne({
    where: {
      id: fromId
    }
  })

  await book?.destroy()
  res.end(JSON.stringify(true))
}
