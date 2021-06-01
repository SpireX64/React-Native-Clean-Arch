import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {moduleConfigTypes} from '../../../config/ModuleConfig';
import {ApiConfig} from '../../../config/ApiConfig';
import {PostListResponse} from './ApiV1Models';
import {IApiV1Client} from './IApiV1Client';
import BaseApiClient from '../base/BaseApiClient';

@injectable()
export default class ApiV1Client extends BaseApiClient implements IApiV1Client {
  constructor(@inject(moduleConfigTypes.apiConfig) config: ApiConfig) {
    super(config.v1.baseUrl);
  }

  public async fetchPosts(): Promise<PostListResponse> {
    return this.get('/posts');
  }
}
