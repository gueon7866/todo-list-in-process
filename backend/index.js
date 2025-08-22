require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// ...

const app = express();

app.use(cors({
  origin: process.env.FRONT_ORIGIN, // http://localhost:5173
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// 게스트 로그인(익명 인증) 라우트
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// 보호가 필요한 API에 인증 미들웨어 적용
const requireAuth = require('./middlewares/auth');
app.use('/api/todos', requireAuth, require('./routes/todoRoutes'));
