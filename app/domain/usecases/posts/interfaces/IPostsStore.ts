import {PostModel} from '../models';

export default interface IPostsStore {
  isEmpty: boolean;

  get(id: number): PostModel | null;
  getRange(): readonly PostModel[];

  add(post: PostModel): void;
  addRange(posts: PostModel[]): void;

  update(post: PostModel): boolean;

  remove(id: number): boolean;
  clear(): void;
}
