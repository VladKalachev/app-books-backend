import type { Request, Response } from 'express';

class UserController {
  registration(req: Request, res: Response) {
    console.log('loginController', req);
    res.end(true);
  }

  login(req: Request, res: Response) {
    console.log('loginController', req);
    res.end(true);
  }

  logout(req: Request, res: Response) {
    console.log('loginController', req);
    res.end(true);
  }

  refresh(req: Request, res: Response) {
    console.log('loginController', req);
    res.end(true);
  }
}

export default new UserController();
