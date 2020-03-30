import React from 'react';
import { Store } from 'redux';
import { renderToString } from 'react-dom/server';
import {
  NextFunction, Request, Response, Router,
} from 'express';
import fs from 'fs';
import path from 'path';
import IndexComponent from '../IndexComponent';
import createStoreWithPreloadedState from '../../src/common/store';
import { fetchStories } from '../../src/components/list/actions';
import { fetchStory } from '../../src/components/story/actions';
import { IBaseController } from '../common/interfaces';

class SSRController implements IBaseController {
  private baseFilePath: string = path.resolve(__dirname, '../../public');

  private store: Store;

  public router = Router();

  constructor() {
    this.store = createStoreWithPreloadedState();
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.get('/story/:slug', this.reduxFetchStory, this.renderSSR);
    this.router.get('/', this.reduxFetchStories, this.renderSSR);
  }

  reduxFetchStories = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    await this.store.dispatch(fetchStories());
    next();
  };

  reduxFetchStory = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { slug } = req.params;

    await this.store.dispatch(fetchStory(slug));
    next();
  }

  renderSSR = async (req: Request, res: Response): Promise<any> => {
    const context: any = {};
    const preloadedState: any = this.store.getState();
    const indexPath: string = `${this.baseFilePath}/index.html`;
    const appElement = React.createElement(IndexComponent, { context, req, store: this.store });
    const reactAppHtml: string = renderToString(appElement);
    const preloadedStateJson: string = JSON.stringify(preloadedState).replace(/</g, '\\u003c');

    fs.readFile(indexPath, 'utf-8', (error: any, data: string): any => {
      if (error) {
        return res.status(500).json({ error });
      }

      return res
        .status(200)
        .send(
          data
            .replace(
              // eslint-disable-next-line quotes
              `<div id="root"></div>`, `<div id="root">${reactAppHtml}</div>`,
            )
            .replace(
              '<script>PRELOADED_STATE</script>',
              `<script>window.__PRELOADED_STATE__ = ${preloadedStateJson};</script>`,
            ),
        );
    });
  }
}

export default SSRController;
