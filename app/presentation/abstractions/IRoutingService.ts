import { NavigationContainerRef } from "@react-navigation/native";

export const Routes = Object.freeze({
  Home: 'Home',
  Posts: 'Posts',
})

export default interface IRoutingService {
  readonly params: Record<string, any>;

  forward(screenName: string, params?: Record<string, any> | null): void;
  replace(screenName: string, params?: Record<string, any>,): void;
  back(): void;
  backToScreen(screenName: string): void;
  backToRoot(): void;

  attachNavigator(navigator: NavigationContainerRef): void;
  detachNavigator(): void;
}
