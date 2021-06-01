import {ContainerModule, interfaces} from 'inversify';
import IPostsStore from '../domain/usecases/posts/interfaces/IPostsStore';
import PostsStore from './PostsStore';
import moduleStoreTypes from './moduleStoreTypes';

const moduleStore = new ContainerModule((bind: interfaces.Bind) => {
  bind<IPostsStore>(moduleStoreTypes.postsStore)
    .to(PostsStore)
    .inSingletonScope();
});

export default moduleStore;
