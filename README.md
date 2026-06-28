# 🎓 EduReach — Agentic College Chatbot Platform

EduReach is a full-stack, AI-powered university portal designed to bridge the gap between static, overwhelming institution websites and prospective students. By integrating agentic LLM workflows and real-time voice synthesis, EduReach provides 24/7 instant access to complex college data like fee structures, admission deadlines, and placement statistics via text and voice.

---

## ✨ Features

### 🤖 Smart AI Capabilities
* **Agentic RAG Chatbot:** Powered by Google Gemini. Autonomously decides when to look up the institutional knowledge base using native tool-calling to resolve complex student queries with contextual accuracy.
* **AI Voice Counselor ("Ava"):** An interactive voice agent capable of initiating automated outbound phone calls to registered students for natural, human-like audio consultations about campus life and courses.

### 💻 Full-Stack Platform Features
* **Gated Content Ecosystem:** Features a beautiful, interactive landing page built with React + TypeScript. High-value data (Student Life, Placements, Events) and AI tools are securely gated behind registration walls.
* **Smart Visitor Conversions:** Scroll-triggered engagement logic displays an intuitive signup popup dynamically once a guest scrolls past the Mentors section.
* **Secure JWT Authentication:** Complete login/signup lifecycle with encrypted password hashing (`bcryptjs`), stateless JWT validation, and customized Axios interceptors to keep sessions fluid.

---

## 🛠️ Tech Stack

| Frontend | Backend | Database & Security | AI Ecosystem |
| :--- | :--- | :--- | :--- |
| React | Node.js v24 (Native) | MongoDB Atlas | Google Gemini |
| TypeScript | Express.js | JSON Web Tokens (JWT) | Voice Webhooks |
| Tailwind CSS | Axios | Bcrypt.js | RAG Framework |

---

## 📐 System Architecture

```text
+------------------------------------------------------------------------+
|                          FRONTEND (React + TS)                         |
|                                                                        |
|  [Public Core]      -> Hero, About, Achievements, Courses, Mentors     |
|  [Smart Popups]     -> Dynamic Login/Signup Interceptor                |
|  [Authenticated]   -> Student Life, Placements, AI Chat & Voice Portal |
+-----------------------------------+------------------------------------+
                                    |
                                    | Axios HTTP / Interceptors
                                    v
+------------------------------------------------------------------------+
|                          BACKEND (Express.js)                          |
|                                                                        |
|  [Auth API]         -> Register, Login, Token Refresh (JWT)            |
|  [Middleware]       -> Secure Route Protection & Express Error Handler |
|  [AI Orchestration] -> Gemini Tool-Calling Router & Voice Integration  |
+-----------------------------------+------------------------------------+
                                    |
                                    v
                       +-------------------------+
                       |      DATA SYSTEM        |
                       |                         |
                       |  - MongoDB Atlas (Users) |
                       |  - Knowledge Base (RAG) |
                       +-------------------------+
PROJECT STRUCTURE

edureach-platform/
|
+-- client/                              <- React Frontend
|   +-- src/
|   |   +-- App.tsx                      <- Router setup
|   |   +-- main.tsx                     <- Entry point
|   |   +-- index.css                    <- Tailwind styles
|   |   +-- data/
|   |   |   +-- content.ts              <- ALL static content
|   |   +-- components/
|   |   |   +-- Navbar.tsx
|   |   |   +-- Footer.tsx
|   |   |   +-- HeroSection.tsx
|   |   |   +-- AboutSection.tsx
|   |   |   +-- AchievementsSection.tsx
|   |   |   +-- CoursesSection.tsx
|   |   |   +-- QuotesSection.tsx
|   |   |   +-- MentorsSection.tsx       <- scroll trigger for popup
|   |   |   +-- StudentLifeSection.tsx   <- logged-in only
|   |   |   +-- EventsGallery.tsx        <- logged-in only
|   |   |   +-- CounselorCTA.tsx         <- logged-in only
|   |   |   +-- HiringStatsSection.tsx   <- logged-in only
|   |   |   +-- SignupPopup.tsx
|   |   |   +-- CallPopup.tsx            <- Placeholder (Part 2)
|   |   +-- pages/
|   |   |   +-- HomePage.tsx
|   |   |   +-- LoginPage.tsx
|   |   |   +-- SignupPage.tsx
|   |   +-- context/
|   |   |   +-- AuthContext.tsx
|   |   +-- services/
|   |       +-- api.ts                   <- Axios instance
|   |       +-- auth.service.ts
|   +-- package.json
|
+-- server/                              <- Express.js Backend
|   +-- src/
|   |   +-- app.ts                       <- Express config
|   |   +-- server
|   |   +-- config/
|   |   |   +-- database.config.ts
|   |   +-- models/
|   |   |   +-- user.model.ts
|   |   +-- routes/
|   |   |   +-- auth.routes.ts
|   |   +-- controllers/
|   |   |   +-- auth.controller.ts
|   |   +-- middleware/
|   |   |   +-- auth.middleware.ts
|   |   |   +-- error-handler.middleware.ts
|   |   +-- utils/
|   |       +-- jwt.util.ts
|   |       +-- password.util.ts
|   +-- .env
|   +-- package.json
