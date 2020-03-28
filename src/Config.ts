/* istanbul ignore file */
import { IAppConfig } from 'common/interfaces';

export default {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
} as IAppConfig;
