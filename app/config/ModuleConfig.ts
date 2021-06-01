import { ContainerModule, interfaces } from "inversify";
import { ApiConfig } from './ApiConfig';

const apiConfig = require('./ApiConfig.json');

export const moduleConfigTypes = Object.freeze({
  apiConfig: Symbol('apiConfig'),
});

const moduleConfig = new ContainerModule((bind: interfaces.Bind) => {

  bind<ApiConfig>(moduleConfigTypes.apiConfig)
    .toConstantValue(apiConfig);
});

export default moduleConfig;
