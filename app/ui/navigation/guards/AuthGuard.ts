import { NavigationGuard } from "../routers/StackGuardRouter";
import { NavigationState } from "@react-navigation/native";
import { injectable } from "inversify";

@injectable()
export default class AuthGuard extends NavigationGuard {

  canNavigate(state: NavigationState): boolean {
    return false
  }
}
