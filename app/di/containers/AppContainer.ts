import 'reflect-metadata';
import {Container} from 'inversify';
import moduleUI from '../../ui/moduleUI';
import modulePresentation from '../../presentation/modulePresentation';
import moduleDomain from '../../domain/moduleDomain';
import moduleGateway from '../../gateway/moduleGateway';
import moduleNative from '../../native/moduleNative';
import moduleStore from '../../store/moduleStore';
import moduleConfig from '../../config/ModuleConfig';

export function createAppContainer() {
  const appContainer = new Container();

  appContainer.load(
    modulePresentation,
    moduleUI,
    moduleGateway,
    moduleNative,
    moduleStore,
    moduleDomain,
    moduleConfig,
  );

  return appContainer;
}
