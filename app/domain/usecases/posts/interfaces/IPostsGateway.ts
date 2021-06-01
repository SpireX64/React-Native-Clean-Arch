import { PostModel } from "../models";

export default interface IPostsGateway {
  loadPosts(): Promise<PostModel[]>;
}
