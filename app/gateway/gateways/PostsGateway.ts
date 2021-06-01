import 'reflect-metadata';
import IPostsGateway from '../../domain/usecases/posts/interfaces/IPostsGateway';
import {PostModel} from '../../domain/usecases/posts/models';
import {inject, injectable} from 'inversify';
import ApiV1Client from '../api/v1/ApiV1Client';
import {mapListResponse} from '../mappers/PostsMapper';
import moduleGatewayTypes from '../moduleGatewayTypes';

@injectable()
export default class PostsGateway implements IPostsGateway {
  private api: ApiV1Client;

  constructor(
    @inject(moduleGatewayTypes.apiV1) api: ApiV1Client
  ) {
    this.api = api;
  }

  loadPosts(): Promise<PostModel[]> {
    return this.api.fetchPosts().then(mapListResponse);
  }
}
