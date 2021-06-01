import {inject, injectable} from 'inversify';
import IPostsGateway from './interfaces/IPostsGateway';
import IPostsStore from './interfaces/IPostsStore';
import {PostModel} from './models';
import IPostsInteractor from './IPostsInteractor';
import moduleGatewayTypes from '../../../gateway/moduleGatewayTypes';
import moduleStoreTypes from '../../../store/moduleStoreTypes';

@injectable()
export default class PostsInteractor implements IPostsInteractor {
  private gateway: IPostsGateway;
  private store: IPostsStore;

  public constructor(
    @inject(moduleGatewayTypes.postsGateway) gateway: IPostsGateway,
    @inject(moduleStoreTypes.postsStore) store: IPostsStore,
  ) {
    this.gateway = gateway;
    this.store = store;
  }

  public getPostsList = async (forceLoad: boolean = false) => {
    let posts: PostModel[];
    if (this.store.isEmpty || forceLoad) {
      posts = await this.gateway.loadPosts();
      this.store.addRange(posts);
    } else {
      posts = [...this.store.getRange()];
    }
    return posts;
  };
}
