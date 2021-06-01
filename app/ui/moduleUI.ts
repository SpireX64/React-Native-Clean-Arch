import {ContainerModule, interfaces} from 'inversify';
import IRoutingService from '../presentation/abstractions/IRoutingService';
import RoutingService from './shared/services/RoutingService';
import moduleUITypes from './moduleUITypes';

const moduleUI = new ContainerModule((bind: interfaces.Bind) => {
  bind<IRoutingService>(moduleUITypes.routingService)
    .to(RoutingService)
    .inSingletonScope();
});

export default moduleUI;
