import type { Request, Response } from 'express';

class UserController {
  registration(req: Request, res: Response) {
    console.log('registration');
    res.end(true);
  }

  login(req: Request, res: Response) {
    console.log('login');
    res.end(true);
  }

  logout(req: Request, res: Response) {
    console.log('logout');
    res.end(true);
  }

  refresh(req: Request, res: Response) {
    console.log('refresh');
    res.end(true);
  }

  all(req: Request, res: Response) {
    console.log('getAll', req);
    res.end(true);
  }
}

export default new UserController();
