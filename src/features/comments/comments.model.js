import { ApplicationError } from "../../error-handler/applicationError.js";

export class Comment {
  constructor(id, userId, postId, content) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }

  static getAllComments(posId) {
    return comments.filter((u) => u.postId == posId);
  }

  static createComment(userId, posId, content) {
    const newComment = new Comment(Date.now(), userId, posId, content);
    comments.push(newComment);
    return newComment;
  }

  static deleteComment(id) {
    const index = comments.findIndex((u) => u.id == id);
    if (index === -1) throw new ApplicationError("Comment not found", 404);
    comments.splice(index, 1);
    return true;
  }

  static updateComment(id, content) {
    const comment = comments.find((u) => u.id == id);
    if (!comment) throw new ApplicationError("Comment not found", 404);
    comment.content = content;
    return comment;
  }
}

const comments = [new Comment(1, "user1", "post1", "content of comment")];
