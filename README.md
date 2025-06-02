# 🚀 Todo Master - Full Stack Todo Application

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-orange.svg)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A modern, full-stack todo application built with Express.js and Supabase, featuring a beautiful responsive UI and comprehensive REST API.

## ✨ Features

### 🎯 Core Functionality
- ✅ **CRUD Operations** - Create, Read, Update, Delete todos
- 🔄 **Real-time Updates** - Instant UI updates after operations
- 🔍 **Search & Filter** - Search todos and filter by status
- 📊 **Progress Tracking** - Visual progress bar and statistics
- 📱 **Responsive Design** - Works perfectly on all devices

### 🎨 User Experience
- 🌟 **Modern UI** - Beautiful gradient design with smooth animations
- ⚡ **Fast Performance** - Optimized loading and interactions
- 🎭 **Loading States** - Elegant loading spinners and feedback
- 💬 **Smart Notifications** - Success/error messages with auto-dismiss
- 🎯 **Intuitive Interface** - Clean, user-friendly design

### 🛠️ Technical Features
- 📡 **RESTful API** - Well-structured API endpoints
- 🗄️ **Database Integration** - Supabase PostgreSQL database
- 🔒 **Environment Variables** - Secure configuration management
- 📖 **API Documentation** - Comprehensive endpoint documentation
- 🧪 **Built-in Testing** - API testing interface included

## 🏗️ Tech Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js 5.x
- **Database:** Supabase (PostgreSQL)
- **Environment:** dotenv
- **CORS:** Enabled for cross-origin requests

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - ES6+ features
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach

### Development Tools
- **nodemon** - Development server with auto-reload
- **npm** - Package management
- **Git** - Version control

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Supabase Account** ([Sign up here](https://supabase.com/))
- **Git** (for cloning the repository)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/todo-express.git
cd todo-express
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Server Configuration
PORT=3000
```

> **How to get Supabase credentials:**
> 1. Go to [Supabase Dashboard](https://app.supabase.com/)
> 2. Create a new project or select existing one
> 3. Go to Settings → API
> 4. Copy the Project URL and anon public key

### 4. Database Setup
Create a `todos` table in your Supabase database:
```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Start the Application
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

### 6. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

## 📡 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### GET /todos
Retrieve all todos
```http
GET /todos
```

**Response:**
```json
[
  {
    "id": 1,
    "task": "Complete project documentation",
    "is_completed": false,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

#### POST /todos
Create a new todo
```http
POST /todos
Content-Type: application/json

{
  "task": "New todo item"
}
```

**Response:**
```json
{
  "id": 2,
  "task": "New todo item",
  "is_completed": false,
  "created_at": "2024-01-15T10:35:00Z"
}
```

#### GET /todos/:id
Retrieve a specific todo
```http
GET /todos/1
```

**Response:**
```json
{
  "id": 1,
  "task": "Complete project documentation",
  "is_completed": false,
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### PUT /todos/:id
Update a todo
```http
PUT /todos/1
Content-Type: application/json

{
  "task": "Updated task",
  "is_completed": true
}
```

**Response:**
```json
{
  "id": 1,
  "task": "Updated task",
  "is_completed": true,
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### DELETE /todos/:id
Delete a todo
```http
DELETE /todos/1
```

**Response:**
```json
{
  "message": "Todo deleted successfully"
}
```

### Error Responses
```json
{
  "error": "Error message description"
}
```

## 📁 Project Structure

```
todo-express/
├── 📁 public/                 # Static files
│   └── 📄 index.html         # Frontend application
├── 📁 node_modules/          # Dependencies
├── 📄 server.js              # Express server
├── 📄 package.json           # Project configuration
├── 📄 package-lock.json      # Dependency lock file
├── 📄 .env                   # Environment variables (create this)
├── 📄 .gitignore            # Git ignore rules
└── 📄 README.md             # Project documentation
```

## 🎮 Usage Guide

### Adding Todos
1. Type your task in the input field
2. Press Enter or click "Add Task"
3. Your todo will appear in the list instantly

### Managing Todos
- **Complete**: Click the "Complete" button to mark as done
- **Edit**: Click "Edit" to modify the task text
- **Delete**: Click "Delete" to remove (with confirmation)

### Filtering & Search
- Use the **All/Pending/Completed** tabs to filter todos
- Use the **search bar** to find specific todos
- Filters work together for precise results

### Progress Tracking
- View **statistics** at the top (Total, Completed, Pending)
- Monitor **progress bar** for completion percentage

## 🛠️ Development

### Available Scripts
```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Install dependencies
npm install
```

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `SUPABASE_URL` | Your Supabase project URL | ✅ |
| `SUPABASE_ANON_KEY` | Your Supabase anonymous key | ✅ |
| `PORT` | Server port (default: 3000) | ❌ |

### Development Tips
- The server auto-reloads on file changes in development mode
- Check browser console for API call logs
- Use the built-in API testing buttons for debugging

## 🧪 Testing

### Built-in API Testing
The application includes a built-in testing interface:
1. Navigate to the "API Testing" section
2. Use the provided buttons to test endpoints
3. Check console for detailed logs

### Manual Testing
You can test the API using tools like:
- **Postman** - REST API testing
- **cURL** - Command line testing
- **Browser DevTools** - Network tab monitoring

## 🚀 Deployment

### Heroku
1. Create a Heroku app
2. Set environment variables in Heroku config
3. Deploy using Git:
```bash
git push heroku main
```

### Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy with one click

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Font Awesome](https://fontawesome.com/) - Beautiful icons
- [Node.js](https://nodejs.org/) - JavaScript runtime

## 📊 Project Stats

- **Lines of Code**: ~1,500
- **API Endpoints**: 5
- **Dependencies**: 4
- **Browser Support**: Modern browsers (ES6+)
- **Mobile Responsive**: ✅
- **PWA Ready**: ⚡ (future enhancement)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[Report Bug](https://github.com/yourusername/todo-express/issues) • [Request Feature](https://github.com/yourusername/todo-express/issues) • [Documentation](https://github.com/yourusername/todo-express/wiki)

</div> 