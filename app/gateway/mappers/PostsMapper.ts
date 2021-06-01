import {PostListResponse, PostResponse} from '../api/v1/ApiV1Models';
import {PostModel} from '../../domain/usecases/posts/models';

export const mapResponse = (response: PostResponse): PostModel => ({
  id: response.id,
  title: response.title,
  body: response.body,
});

export const mapListResponse = (response: PostListResponse): PostModel[] =>
  response.map(mapResponse);
