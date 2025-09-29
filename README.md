# Memories Project~~

## Overview
Memories is a full-stack MERN (MongoDB, Express, React, Node.js) application for creating, sharing, and managing personal memory posts. Users can sign in, upload images, add titles, messages, and tags, and interact with posts through likes and comments. The project demonstrates modern web development practices, including secure authentication, state management, and responsive UI design.

## Tech Stack
- **Frontend:** React, Material-UI, Redux, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT

## Features
- User authentication (JWT)
- Create, edit, delete, and view memory posts
- Upload images and add tags
- Like and comment on posts
- Responsive design

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/abhayflame/projects.git
   cd Memories
   ```
2. **Install dependencies:**
   - For client:
     ```sh
     cd client
     npm install
     ```
   - For server:
     ```sh
     cd ../server
     npm install
     ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in the server folder and update values as needed.

### Running the Project
- **Start the server:**
  ```sh
  npm start
  ```
- **Start the client:**
  ```sh
  cd ../client
  npm start
  ```
- The client will run on `http://localhost:3000` and the server on `http://localhost:5000`.

## Folder Structure
```
Memories/
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
├── server/
│   ├── controlers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── README.md
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, contact [abhayflame](https://github.com/abhayflame).
