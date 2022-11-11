import { NextFunction, Router, Request, Response } from "express";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Gui' }];

  res.status(200).send(users);
});

export default usersRoute;