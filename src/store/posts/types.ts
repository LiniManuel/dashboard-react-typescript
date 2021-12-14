export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FetchPostsInitialState {
  data: Post[];
  loading: boolean;
  error: string;
}
