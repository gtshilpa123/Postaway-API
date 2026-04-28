import { Comment } from "./comments.model.js";

export class CommentsController {
  getAllComments(req, res) {
    try {
      console.log(req.params);
      const { postId } = req.params;
      const comments = Comment.getAllComments(postId);
      res.status(200).json({ status: "success", comments });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  createComment(req, res) {
    try {
      console.log(req.params);
      const { postId } = req.params;
      const { userId } = req.cookies;
      const { content } = req.body;
      if (!content || !userId) {
        return res
          .status(400)
          .json({ status: "failure", message: "Missing content or userId" });
      }
      const comment = Comment.createComment(userId, postId, content);
      res.status(201).json({ status: "success", comment });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  deleteComment(req, res) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const deleted = Comment.deleteComment(id);
      if (!deleted) {
        return res
          .status(404)
          .json({ status: "failure", message: "comment not found" });
      }
      res.status(200).json({
        status: "success",
        message: "Comment is deleted successfully!",
      });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  updateComment(req, res) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const { content } = req.body;
      if (!content) {
        return res
          .status(400)
          .json({ status: "failure", message: "Missing updating content" });
      }
      const updatedComment = Comment.updateComment(id, content);
      if (!updatedComment) {
        return res
          .status(404)
          .json({ status: "failure", message: "Comment not found" });
      }
      res.status(200).json({ status: "success", comment: updatedComment });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
}
