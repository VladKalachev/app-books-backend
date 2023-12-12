import { type Request, type Response } from 'express'
import { bookService } from '../../services/book.service'

export default async function bookOne (req: Request, res: Response) {
  const fromId = parseInt(req.params.id ?? '0')
  try {
    const book = await bookService.one(fromId)
    res.json(book)
  } catch (e) {
    res.json(e)
  }
}
