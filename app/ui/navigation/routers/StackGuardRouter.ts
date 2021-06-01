import { NavigationAction, NavigationState, RouterConfigOptions, StackRouter } from "@react-navigation/native";
import { StackRouterOptions } from "@react-navigation/routers/lib/typescript/src/StackRouter";

export abstract class NavigationGuard {
  public abstract canNavigate(state: NavigationState): boolean;
  public onNavigationFail(): NavigationAction | null {
    return null;
  }
}

const StackGuardRouter = (options: StackRouterOptions) => {
  const router = StackRouter(options);

  return {
    ...router,
    getStateForAction(
      state: NavigationState,
      action: NavigationAction,
      options: RouterConfigOptions
    ) {
      let allowToNavigate = true;
      let guardNavAction = null;

      const isPushAction = action.type === 'PUSH';

      if (isPushAction) {
        // @ts-ignore
        let params = options.routeParamList[action.payload.name];
        // @ts-ignore
        const screenGuards: NavigationGuard[] = params?.guards;

        // No guards -> No conditions
        if (screenGuards != null && Object.keys(screenGuards).length > 0) {
          for (let guard of screenGuards) {
            allowToNavigate = guard.canNavigate(state);
            if (!allowToNavigate) {
              guardNavAction = guard.onNavigationFail();
              break;
            }
          }
        }
      }

      if (allowToNavigate) {
        return router.getStateForAction(state, action, options);
      }

      return guardNavAction != null
        ? router.getStateForAction(state, guardNavAction, options)
        : state;
    }
  };
};

export default StackGuardRouter;
