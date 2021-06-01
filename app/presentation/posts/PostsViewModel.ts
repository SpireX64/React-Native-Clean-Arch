import {inject, injectable} from 'inversify';
import IPostsInteractor from '../../domain/usecases/posts/IPostsInteractor';
import {PostModel} from '../../domain/usecases/posts/models';
import {action, makeObservable, observable, runInAction} from 'mobx';
import moduleDomainTypes from '../../domain/moduleDomainTypes';

@injectable()
export default class PostsViewModel {
  private postsInteractor: IPostsInteractor;

  public isLoading: boolean = false;
  public posts: PostModel[] = [];

  constructor(
    @inject(moduleDomainTypes.postsInteractor)
    postsInteractor: IPostsInteractor,
  ) {
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
}
