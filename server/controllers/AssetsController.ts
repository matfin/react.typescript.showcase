import { Request, Response, Router } from 'express';
import path from 'path';
import { IBaseController } from '../common/interfaces';

class AssetsController implements IBaseController {
  private baseFilePath: string = path.resolve(__dirname, '../../');

  public router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.get('/:file.js', this.scripts);
    this.router.get('*', this.allOthers);
  }

  scripts = (req: Request, res: Response): void => {
    const { params: { file } } = req;

    res
      .status(200)
      .sendFile(
        `${this.baseFilePath}/public/${file}.js`,
        {
          headers: {
            'Content-Type': 'application/x-javascript',
          },
        },
      );
  }

  allOthers = (req: Request, res: Response): void => {
    res
      .status(200)
      .sendFile(
        `${this.baseFilePath}/public/index.html`,
        {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
          },
        },
      );
  };
}

export default AssetsController;
