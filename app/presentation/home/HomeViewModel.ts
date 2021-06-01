import 'reflect-metadata';
import { makeAutoObservable } from "mobx";
import { injectable, inject } from "inversify";
import IRoutingService, { Routes } from "../abstractions/IRoutingService";
import { moduleUITypes } from "../../ui/ModuleUI";

@injectable()
export default class HomeViewModel {

  private routingService: IRoutingService;

  public constructor(
    @inject(moduleUITypes.routingService) routingService: IRoutingService,
  ) {
    this.routingService = routingService;
    makeAutoObservable(this);
  }

  public openPostsPress = () => {
    this.routingService.forward(Routes.Posts);
  }

  public openTodoPress = () => {

  }
}