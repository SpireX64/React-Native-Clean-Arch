import IPostsStore from '../domain/usecases/posts/interfaces/IPostsStore';
import {PostModel} from '../domain/usecases/posts/models';
import { injectable } from "inversify";

@injectable()
export default class PostsStore implements IPostsStore {
  private posts: PostModel[] = [];

  get isEmpty(): boolean {
    return this.posts.length === 0;
  }

  add(post: PostModel): void {
    this.posts.push(post);
  }

  addRange(posts: PostModel[]): void {
    this.posts = this.posts.concat(posts);
  }

  clear(): void {
    this.posts = [];
  }

  get(id: number): PostModel | null {
    return this.posts.find(post => post.id === id) ?? null;
  }

  getRange(): readonly PostModel[] {
    return [...this.posts];
  }

  remove(id: number): boolean {
    const index = this.posts.findIndex(it => it.id === id);
    if (index < 0) return false;
    this.posts.splice(index, 1);
    return true;
  }

  update(post: PostModel): boolean {
    const index = this.posts.findIndex(it => it.id === post.id);
    if (index < 0) return false;

    this.posts[index] = post;
    return true;
  }
}
