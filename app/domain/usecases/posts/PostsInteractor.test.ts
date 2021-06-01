import 'reflect-metadata';
import PostsInteractor from "./PostsInteractor";
import { PostModel } from "./models";


it("Должен загрузить посты из Gateway, когда Store пустой", function() {
  const expectedPost: PostModel = {
    id: 1,
    title: 'foo',
    body: 'bar',
  }

  const storeAddRangeMock = jest.fn((posts: PostModel[]) => {});
  const gatewayLoadPostsMock = jest.fn(async () => Promise.resolve([expectedPost]))

  const interactor = new PostsInteractor(
    {
      loadPosts: gatewayLoadPostsMock,
    },
    {
      isEmpty: true,
      addRange: storeAddRangeMock
    },
  );

  return interactor.getPostsList(false)
    .then(posts => {
      expect(posts.length).toBe(1);
      expect(gatewayLoadPostsMock).toHaveBeenCalled();
      expect(storeAddRangeMock).toHaveBeenCalled();

      const post = posts[0];
      expect(post.id).toBe(expectedPost.id);
      expect(post.title).toBe(expectedPost.title);
      expect(post.body).toBe(expectedPost.body);

    })
    .catch(err => fail(err));
});

it("Когда стор не пуст, не должен вызывать Gateway", function() {
  const expectedPost: PostModel = {
    id: 1,
    title: 'foo',
    body: 'bar',
  }

  const storeGetRangeMock = jest.fn(() => [expectedPost]);
  const gatewayLoadPostsMock = jest.fn();

  const interactor = new PostsInteractor(
    {
      loadPosts: gatewayLoadPostsMock,
    },
    {
      isEmpty: false,
      getRange: storeGetRangeMock
    },
  );

  return interactor.getPostsList(false)
    .then(posts => {
      expect(posts.length).toBe(1);
      expect(gatewayLoadPostsMock).not.toHaveBeenCalled();
      expect(storeGetRangeMock).toHaveBeenCalled();

      const post = posts[0];
      expect(post.id).toBe(expectedPost.id);
      expect(post.title).toBe(expectedPost.title);
      expect(post.body).toBe(expectedPost.body);

    })
    .catch(err => fail(err));
});

it("Когда Store не пуст, но требуется загрузить из Gateway, должен вызвать GateWay", function() {
  const expectedPost: PostModel = {
    id: 1,
    title: 'foo',
    body: 'bar',
  }

  const storeAddRangeMock = jest.fn((posts: PostModel[]) => {});
  const gatewayLoadPostsMock = jest.fn(async () => Promise.resolve([expectedPost]))

  const interactor = new PostsInteractor(
    {
      loadPosts: gatewayLoadPostsMock,
    },
    {
      isEmpty: false,
      addRange: storeAddRangeMock
    },
  );

  return interactor.getPostsList(true)
    .then(posts => {
      expect(posts.length).toBe(1);
      expect(gatewayLoadPostsMock).toHaveBeenCalled();
      expect(storeAddRangeMock).toHaveBeenCalled();

      const post = posts[0];
      expect(post.id).toBe(expectedPost.id);
      expect(post.title).toBe(expectedPost.title);
      expect(post.body).toBe(expectedPost.body);

    })
    .catch(err => fail(err));
})
