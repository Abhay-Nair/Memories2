# 📸 Memories - Social Memory Sharing Platform

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

**Share your precious moments with the world**

• [Features](#features) • [Getting Started](#getting-started)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

**Memories** is a full-stack MERN (MongoDB, Express, React, Node.js) social media application that allows users to create, share, and manage their personal memory posts. Users can upload images, add titles, messages, and tags, and interact with posts through likes and comments.

### What Makes It Special?

- 🎨 **Beautiful UI**: Clean, modern interface with smooth animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Real-Time Updates**: Instant feedback on user interactions
- 🔐 **Secure Authentication**: JWT-based authentication system
- 🎭 **Rich Features**: Like, comment, edit, and delete posts

## ✨ Features

### 🔐 Authentication & Authorization
- User registration with email validation
- Secure login with JWT tokens
- Password encryption using bcrypt
- Protected routes and API endpoints
- Session management

### 📝 Post Management
- **Create Posts**: Share memories with title, message, tags, and images
- **Edit Posts**: Update your posts anytime
- **Delete Posts**: Remove posts you no longer want
- **Image Upload**: Upload and display images with your memories
- **Tags**: Organize posts with custom tags

### 💬 Social Interactions
- **Like Posts**: Show appreciation for memories
- **Like Counter**: See how many people liked a post
- **User Attribution**: Each post shows the creator's name
- **Timestamps**: Track when memories were created

### 🎨 User Experience
- **Responsive Grid Layout**: Beautiful card-based design
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Form Validation**: Ensure data quality
- **Search & Filter**: Find specific memories (coming soon)


## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building user interfaces
- **Redux** - State management
- **Material-UI** - React component library
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

### Development Tools
- **Nodemon** - Auto-restart server during development
- **dotenv** - Environment variable management
- **CORS** - Cross-Origin Resource Sharing
- **body-parser** - Parse incoming request bodies

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas account)
- Git

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhay-Nair/Memories2.git
cd Memories2
```

#### 2️⃣ Server Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
# Copy .env.example to .env and update values
cp .env.example .env
```

**Configure `.env` file:**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/memories
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/memories

JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

```bash
# Start the server
npm start

# Server will run on http://localhost:5000
```

#### 3️⃣ Client Setup

Open a new terminal:

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the client
npm start

# Client will run on http://localhost:3000
```

#### 4️⃣ Access the Application

Open your browser and navigate to: `http://localhost:3000`

### 🐳 Docker Setup (Optional)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access the application at http://localhost:3000
```

## 📁 Project Structure

```
Memories2/
├── client/                    # Frontend React application
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── actions/          # Redux actions
│   │   │   └── posts.js
│   │   ├── api/              # API calls
│   │   │   └── index.js
│   │   ├── components/       # React components
│   │   │   ├── Form/
│   │   │   │   ├── Form.js
│   │   │   │   └── styles.js
│   │   │   └── Posts/
│   │   │       ├── Post/
│   │   │       │   ├── Post.js
│   │   │       │   └── styles.js
│   │   │       ├── Posts.js
│   │   │       └── styles.js
│   │   ├── constants/        # Action types
│   │   │   └── actionTypes.js
│   │   ├── reducers/         # Redux reducers
│   │   │   ├── index.js
│   │   │   └── posts.js
│   │   ├── images/           # Static images
│   │   │   └── Adventures.png
│   │   ├── App.js            # Main App component
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Global styles
│   │   └── styles.js         # Styled components
│   ├── package.json
│   └── .gitignore
├── server/                    # Backend Node.js application
│   ├── controllers/          # Route controllers
│   │   └── posts.js
│   ├── models/               # Mongoose models
│   │   └── postMessage.js
│   ├── routes/               # API routes
│   │   └── posts.js
│   ├── index.js              # Server entry point
│   ├── package.json
│   ├── .env                  # Environment variables
│   └── .env.example          # Example env file
├── README.md
└── .gitignore
```

## 🔌 API Endpoints

### Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/posts` | Get all posts | No |
| GET | `/posts/:id` | Get single post | No |
| POST | `/posts` | Create new post | Yes |
| PATCH | `/posts/:id` | Update post | Yes |
| DELETE | `/posts/:id` | Delete post | Yes |
| PATCH | `/posts/:id/likePost` | Like a post | Yes |

### Example Request

```javascript
// Create a new post
POST /posts
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "My Amazing Memory",
  "message": "This was an incredible day!",
  "tags": ["travel", "adventure", "2024"],
  "selectedFile": "base64_encoded_image_string",
  "creator": "John Doe"
}
```


## 🎨 Key Components

### Post Card
Displays individual memory with:
- Image preview
- Title and message
- Creator name
- Tags
- Like button with counter
- Edit and delete buttons (for creator)
- Creation timestamp

### Memory Form
Create/Edit form with:
- Title input
- Message textarea
- Tags input (comma-separated)
- Image upload
- Submit/Clear buttons

### Posts Grid
Responsive grid layout displaying all memories

## 🗺️ Roadmap

### ✅ Completed
- [x] User authentication (signup/login)
- [x] Create, read, update, delete posts
- [x] Like functionality
- [x] Image upload
- [x] Responsive design
- [x] Redux state management

### 🚧 In Progress
- [ ] Comment system
- [ ] User profiles
- [ ] Search functionality

### 📅 Planned
- [ ] Real-time updates with Socket.io
- [ ] Image optimization and CDN
- [ ] Pagination for posts
- [ ] Advanced search and filters
- [ ] User following system
- [ ] Notifications
- [ ] Share to social media
- [ ] Dark mode
- [ ] Mobile app (React Native)

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Deploy Backend (Heroku)

```bash
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git push heroku main
```

### Deploy Frontend (Vercel/Netlify)

```bash
# Build the app
npm run build

# Deploy to Vercel
vercel

# Or deploy to Netlify
netlify deploy --prod
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

**Abhay Nair**

- GitHub: [@Abhay-Nair](https://github.com/Abhay-Nair)
- ORCID: [0009-0008-7719-4110](https://orcid.org/0009-0008-7719-4110)
- Project Link: [https://github.com/Abhay-Nair/Memories2](https://github.com/Abhay-Nair/Memories2)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful components
- [MongoDB](https://www.mongodb.com/) for the database
- [React](https://reactjs.org/) for the amazing framework
- [Redux](https://redux.js.org/) for state management
- All contributors and supporters

---

<div align="center">

**⭐ Star this repo if you like it!**

Made with ❤️ and React

</div>
