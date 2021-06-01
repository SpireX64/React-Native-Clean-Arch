import { ContainerModule, interfaces } from "inversify";
import IPostsGateway from "../domain/usecases/posts/interfaces/IPostsGateway";
import PostsGateway from "./gateways/PostsGateway";
import ApiV1Client from "./api/v1/ApiV1Client";
import { IApiV1Client } from "./api/v1/IApiV1Client";
import moduleGatewayTypes from "./moduleGatewayTypes";

const moduleGateway = new ContainerModule((bind: interfaces.Bind) => {

  bind<IPostsGateway>(moduleGatewayTypes.postsGateway)
    .to(PostsGateway)
    .inSingletonScope();

  bind<IApiV1Client>(moduleGatewayTypes.apiV1)
    .to(ApiV1Client)
    .inSingletonScope();
});

export default moduleGateway;
