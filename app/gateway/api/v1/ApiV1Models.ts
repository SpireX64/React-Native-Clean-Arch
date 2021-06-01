export type RequestQuery = Record<string, string | number>;

export type PostResponse = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PostListResponse = PostResponse[];
