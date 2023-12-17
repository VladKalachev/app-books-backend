import type { Request, Response } from 'express';

class TestController {
  all(req: Request, res: Response) {
    console.log('TestController', req);
    res.end('TestController');
  }
}

export default new TestController();
