import { PostListResponse } from "./ApiV1Models";

export interface IApiV1Client {
  fetchPosts(): Promise<PostListResponse>;
}
