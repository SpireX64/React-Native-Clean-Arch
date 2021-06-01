import 'reflect-metadata';
import { Container } from "inversify";
import moduleUI from "../../ui/ModuleUI";
import modulePresentation from "../../presentation/ModulePresentation";
import moduleDomain from "../../domain/ModuleDomain";
import moduleGateway from "../../gateway/ModuleGateway";
import moduleNative from "../../native/ModuleNative";
import moduleStore from "../../store/ModuleStore";

export function createAppContainer() {
  const appContainer = new Container();

  appContainer.load(
    moduleDomain,
    modulePresentation,
    moduleUI,
    moduleGateway,
    moduleNative,
    moduleStore,
  );

  return appContainer;
}

