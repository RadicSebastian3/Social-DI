import { Post } from "../types/PostsType"

export const addNewPost = (newPost: Post) => {
  postData.push(newPost);
};

export const postData: Post[] = []
