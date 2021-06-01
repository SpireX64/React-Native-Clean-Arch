import IRoutingService from "../../../presentation/abstractions/IRoutingService";
import { NavigationContainerRef, StackActions } from "@react-navigation/native";
import { injectable } from "inversify";

@injectable()
export default class RoutingService implements IRoutingService {
  #navigator: NavigationContainerRef | null = null;

  get params(): Record<string, any> {
    return this.#navigator?.getCurrentRoute()?.params ?? {};
  }

  back(): void {
    const action = StackActions.pop();
    return this.#navigator?.dispatch(action);
  }

  forward(
    screenName: string,
    params?: Record<string, any>,
  ): void {
    const action = StackActions.push(screenName, params);
    this.#navigator?.dispatch(action);
  }

  replace(
    screenName: string,
    params?: Record<string, any>,
  ): void {
    const action = StackActions.replace(screenName, params);
    this.#navigator?.dispatch(action);
  }

  backToScreen(screenName: string): void {
    const state = this.#navigator?.dangerouslyGetState();
    const routeNames = state?.routeNames;
    if (routeNames == null || routeNames.length <= 1) return;

    const screenPosition =  routeNames.lastIndexOf(screenName);
    if (screenPosition < 0) return; // Screen not found

    const action = StackActions.pop(routeNames.length - screenPosition - 1);
    this.#navigator?.dispatch(action);
  }

  backToRoot(): void {
    const action = StackActions.popToTop();
    this.#navigator?.dispatch(action);
  }

  attachNavigator(navigator: NavigationContainerRef): void {
    this.#navigator = navigator;
  }

  detachNavigator(): void {
    this.#navigator = null;
  }
}
