import { ContainerModule, interfaces } from "inversify";
import IPostsInteractor from "./usecases/posts/IPostsInteractor";
import PostsInteractor from "./usecases/posts/PostsInteractor";
import moduleDomainTypes from "./moduleDomainTypes";

const moduleDomain = new ContainerModule((bind: interfaces.Bind) => {
  bind<IPostsInteractor>(moduleDomainTypes.postsInteractor)
    .to(PostsInteractor)
    .inTransientScope();
});

export default moduleDomain;
