📌 Postaway API

A RESTful API for a social media application built using Node.js and Express.js.
It enables users to create posts, upload media, like/unlike posts, and interact through comments with secure authentication.

🚀 Features

🔐 Authentication

- User signup and login
- JWT-based authentication
- Protected routes for authorized access

📝 Posts

- Create, update, delete posts
- Upload images using Multer
- Get all posts or posts by user

💬 Comments

- Add comments to posts
- Update and delete comments
- Fetch comments by post

❤️ Likes

- Like/unlike posts (toggle functionality)
- Get total likes per post

📂 File Upload

- Image upload support using Multer
- Files stored in /uploads directory

🪵 Logging

- Request logging middleware using Winston
- Logs request URL and payload

🏗️ Project Structure
project-root/
│
├── src/
│ ├── users/
│ ├── posts/
│ ├── middlewares/
│ ├── error-handler/
│
├── uploads/
├── logs.txt
├── swagger.json
└── server.js

⚙️ Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)
- Multer (file uploads)
- Winston (logging)
- Swagger (API documentation)

🔐 Authentication

- JWT token is generated on login
- Required for protected routes
  Example Header
  Authorization: Bearer <your_token>

📡 API Endpoints

👤 User Routes
| Method | Endpoint | Description |
| ------ | ------------- | ------------- |
| POST | `/api/signup` | Register user |
| POST | `/api/signin` | Login user |

📝 Post Routes
| Method | Endpoint | Description |
| ------ | ------------------------- | ------------------------ |
| GET | `/api/posts/all` | Get all posts |
| GET | `/api/posts/:id` | Get single post |
| GET | `/api/posts/user/:userId` | Get posts by user |
| POST | `/api/posts` | Create post (with image) |
| PUT | `/api/posts/:id` | Update post |
| DELETE | `/api/posts/:id` | Delete post |

💬 Comment Routes
| Method | Endpoint | Description |
| ------ | ---------------------------- | -------------- |
| GET | `/api/comments/post/:postId` | Get comments |
| POST | `/api/comments/post/:postId` | Add comment |
| PUT | `/api/comments/:id` | Update comment |
| DELETE | `/api/comments/:id` | Delete comment |

❤️ Like Routes
| Method | Endpoint | Description |
| ------ | --------------------------- | ---------------- |
| GET | `/api/likes/:postId` | Get total likes |
| POST | `/api/likes/toggle/:postId` | Like/Unlike post |
