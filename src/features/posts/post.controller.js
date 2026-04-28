import { Post } from "./post.model.js";

export class PostController {
  getAllPosts(req, res) {
    try {
      const posts = Post.getAllPosts();
      res.status(200).json({ status: "success", posts });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  getSinglePost(req, res) {
    try {
      const { id } = req.params;
      const post = Post.getSinglePost(id);
      if (!post) {
        return res
          .status(404)
          .json({ status: "failure", message: "Post not found" });
      }
      res.status(200).json({ success: "success", post });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  getByUserId(req, res) {
    try {
      console.log(req.params);
      const { userId } = req.params;
      const posts = Post.getByUserId(userId);
      res.status(200).json({ status: "success", posts });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  createPost(req, res) {
    try {
      const { caption } = req.body;
      const { userId } = req.cookies;
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: "Image file is required" });
      }
      const imageUrl = `/uploads/${file.filename}`;
      newPost = Post.createPost(userId, caption, imageUrl);
      res
        .status(201)
        .json({ message: "Post created successfully", post: newPost });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  deletePost(req, res) {
    try {
      const { id } = req.params;
      const deleted = Post.deletePost(id);
      if (!deleted) {
        return res
          .status(404)
          .json({ status: "failure", message: "Post not found" });
      }
      res
        .status(200)
        .json({ status: "success", message: "Successfully post is deleted" });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  updatePost(req, res) {
    try {
      const { id } = req.params;
      const { caption } = req.body;
      const file = req.file;
      const updatedData = {
        caption,
        imageUrl: file ? `/uploads/${file.filename}` : undefined,
      };
      const updatedPost = Post.updatePost(id, updatedData);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res
        .status(200)
        .json({ post: updatedPost, message: "Successfully post updated" });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
}
