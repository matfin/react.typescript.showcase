import App from './App';
import AssetsController from './controllers/AssetsController';
import StoriesController from './controllers/StoriesController';

const app = new App({
  port: 3000,
  controllers: [
    new StoriesController(),
    new AssetsController(),
  ],
});

app.listen();
