export class Like {
  constructor(id, userId, postId) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
  }

  static getAllLikes(postId) {
    const postLikes = likes.filter((u) => u.postId == postId);
    return { postId, NumberOfLikes: postLikes.length };
  }

  static toggleLike(userId, postId) {
    const existingIndex = likes.findIndex(
      (u) => u.userId == userId && u.postId == postId
    );
    if (existingIndex !== -1) {
      likes.splice(existingIndex, 1);
      const postLikes = likes.filter((u) => u.postId == postId);
      return {
        postId,
        totalLikes: postLikes.length,
        msg: "Like is removed successfully",
      };
    } else {
      const newLike = new Like(Date.now(), userId, postId);
      likes.push(newLike);
      const postLikes = likes.filter((u) => u.postId == postId);
      return {
        postId,
        totalLikes: postLikes,
        msg: "Like is added successfully",
      };
    }
  }
}

var likes = [];
