import { ContainerModule, interfaces } from 'inversify';
import HomeViewModel from './home/HomeViewModel';
import PostsViewModel from "./posts/PostsViewModel";

export const modulePresentationTypes = Object.freeze({
  HomeViewModel: 'HomeViewModel',
  PostsViewModel: 'PostsViewModel',
});

const modulePresentation = new ContainerModule((bind: interfaces.Bind) => {

  bind<HomeViewModel>(modulePresentationTypes.HomeViewModel)
    .to(HomeViewModel)
    .inTransientScope();

  bind<PostsViewModel>(modulePresentationTypes.PostsViewModel)
    .to(PostsViewModel)
    .inTransientScope();
})

export default modulePresentation;
