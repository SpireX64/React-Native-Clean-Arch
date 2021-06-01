import { PostModel } from "./models";

export default interface IPostsInteractor {
  getPostsList(forceLoad: boolean): Promise<PostModel[]>;
}
