import { NextFunction, Router, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Gui' }];

  res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  //get user by id in database
  res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const newUser = req.body;
  //console.log(req.body)
  res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;