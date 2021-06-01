import {inject, injectable} from 'inversify';
import IPostsInteractor from '../../domain/usecases/posts/IPostsInteractor';
import {PostModel} from '../../domain/usecases/posts/models';
import {action, makeObservable, observable, runInAction} from 'mobx';
import moduleDomainTypes from '../../domain/moduleDomainTypes';
import moduleUITypes from '../../ui/moduleUITypes';
import IRoutingService from '../abstractions/IRoutingService';

@injectable()
export default class PostsViewModel {
  private readonly postsInteractor: IPostsInteractor;
  private readonly routingService: IRoutingService;

  public isLoading: boolean = false;
  public posts: PostModel[] = [];

  constructor(
    @inject(moduleDomainTypes.postsInteractor)
    postsInteractor: IPostsInteractor,
    @inject(moduleUITypes.routingService)
    routingService: IRoutingService,
  ) {
    this.routingService = routingService;
    this.postsInteractor = postsInteractor;
    makeObservable(this, {
      posts: observable,
      isLoading: observable,
      preparePosts: action,
    });
  }

  public preparePosts = () => {
    this.isLoading = true;
    this.postsInteractor
      .getPostsList(false)
      .then(posts =>
        runInAction(() => {
          this.posts = posts;
          this.isLoading = false;
        }),
      )
      .catch(reason =>
        runInAction(() => {
          this.isLoading = false;
          console.error(reason);
        }),
      );
  };

  public goBack = () => {
    this.routingService.back();
  };
}
