import { ApplicationError } from "../../error-handler/applicationError.js";

export class Post {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static createPost(userId, caption, imageUrl) {
    const newPost = new Post(posts.length + 1, userId, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }

  static getAllPosts() {
    return posts;
  }

  static getSinglePost(id) {
    return posts.find((u) => u.id == id);
  }

  static getByUserId(userId) {
    return posts.filter((u) => u.userId == userId);
  }

  static deletePost(id) {
    const index = posts.findIndex((u) => u.id == id);
    if (index == -1) throw new ApplicationError("Post not found", 404);
    posts.splice(index, 1);
    return true;
  }

  static updatePost(id, updatedData) {
    const index = posts.findIndex((u) => u.id == id);
    if (index == -1) throw new ApplicationError("Post not found", 404);
    const post = posts[index];
    post.caption = updatedData.caption ?? post.caption;
    post.imageUrl = updatedData.imageUrl ?? post.imageUrl;
    posts[index] = post;
    return post;
  }
}

const posts = [
  new Post(
    1,
    "user 1",
    "post 1",
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
];
