import {ContainerModule, interfaces} from 'inversify';
import HomeViewModel from './home/HomeViewModel';
import PostsViewModel from './posts/PostsViewModel';
import modulePresentationTypes from './modulePresentationTypes';

const modulePresentation = new ContainerModule((bind: interfaces.Bind) => {
  bind<HomeViewModel>(modulePresentationTypes.HomeViewModel)
    .to(HomeViewModel)
    .inTransientScope();

  bind<PostsViewModel>(modulePresentationTypes.PostsViewModel)
    .to(PostsViewModel)
    .inTransientScope();
});

export default modulePresentation;
