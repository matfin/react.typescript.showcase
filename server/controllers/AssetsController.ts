import { Request, Response, Router } from 'express';
import path from 'path';
import { IBaseController } from '../common/interfaces';

class AssetsController implements IBaseController {
  private baseFilePath: string = path.resolve(__dirname, '../../public');

  public router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.get('/:file.js', this.scripts);
  }

  scripts = (req: Request, res: Response): void => {
    const { params: { file } } = req;
    const filePath: string = `${this.baseFilePath}/${file}.js`;

    res
      .status(200)
      .sendFile(
        filePath,
        {
          headers: {
            'Content-Type': 'application/x-javascript',
          },
        },
      );
  }
}

export default AssetsController;
