# blogwebsite
## Overview
"This website is a beautiful, personal space designed for couples to share their wedding stories and precious memories. Built using modern web technology, it ensures a smooth, fast, and responsive experience for every visitor. We focused on a clean, elegant design that keeps the focus entirely on the emotions behind every photo and post. It is a simple, secure way to turn fleeting life moments into a lasting digital keepsake."
---
##Technologies Used
 * **Frontend:-** React.js, HTML5, CSS3, JavaScript
 * **Backend:-** Node.js (with Express.js),JWT authorization,bcryptjs password encryption
* **Database:-** MongoDB Atlas(NoSQL)
* **Tools & IDE:-** Visual Studio Code, Git/GitHub
* **Design:-** TailwindCSS

---

##System Architecture
```
BLOG-WEBSITE/
│
├── backend/
│   ├── config/             # Mongoose connection config (db.js)
│   ├── controllers/        # MVC Business Controllers (auth,blogcontroller)
│   ├── middleware/         # Security JWT protectors, error formatting
│   ├── models/             # Mongoose schemas (User,blogModel )
│   ├── routes/             # Router endpoints mounting
│   ├── uploads/            # folder securely stores user-uploaded media files
│   ├── .env.example        # Environment variable documentation template
│   ├── package.json        # Backend NPM package specifications
│   └── server.js           # Server application initialization entry
│
├── Frontend/Frontend/
│   ├── src/
│   │   ├── components/     # Reusable modules (BlogCard,Footer,LatestBlogs,Navbar)
│   │   ├── context/        # React Global Session State providers (StoreContext.jsx)
│   │   ├── pages/          # Core pages (Login,SignUp,Home,About,Blogs,Contact,Dashboard,SingleBlog)
│   │   ├── App.jsx         # React router maps & portal grid wrapper
│   │   ├── index.css       # Tailwind directives 
│   │   └── main.jsx        # Frontend application entry script
│   ├── package.json        # Frontend React/Vite NPM package configurations
│   └── vite.config.js      # Host settings & local backend server proxy configuration
│
├── README.md               # Operations manual & Viva presentation instructions
└── run-app.bat             # One-click Windows concurrent launcher script
 ---

#Environment Variables

A .env template file has been placed inside backend/.env.
PORT=5000  MONGODB_URI="mongodb+srv://tanishaprajapati342_db_user:blogwebsite123@cluster0.ryz3shi.mongodb.net"  JWT_SECRET="mysecretkey"


