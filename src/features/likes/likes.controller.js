import { Like } from "./likes.model.js";

export class LikesController {
  getAllLikes(req, res) {
    try {
      console.log(req.params);
      const { postId } = req.params;
      const likes = Like.getAllLikes(postId);
      res.status(200).send(likes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch likes" });
    }
  }

  toggleLike(req, res) {
    try {
      console.log(req.params);
      const { postId } = req.params;
      const userId = req.cookies.userId;
      const result = Like.toggleLike(userId, postId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to toggle like" });
    }
  }
}
