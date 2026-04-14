# Todo App

A modern, minimal, and professional **Todo Application** built using **React + Tailwind CSS** with a clean dark UI and smooth user experience.

---

## ✨ Features

* ➕ Add new tasks with description
* ✏️ Edit tasks in main input field
* ❌ Delete tasks
* 🚫 Cancel edit mode
* 💾 LocalStorage support (data persists after refresh)
* 🎯 Hover-based Edit/Delete buttons
* 🌙 Clean and professional dark theme

---

## 🛠️ Tech Stack

* ⚛️ React (Hooks + Functional Components)
* 🎨 Tailwind CSS
* 💽 LocalStorage

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run Project

```
npm run dev
```

---

## 🎨 Tailwind CSS Setup & Usage

This project uses **Tailwind CSS** for styling.

### 📦 Install Tailwind CSS

```
npm install tailwindcss @tailwindcss/vite
```

### ⚙️ Configure Tailwind

Update `tailwind.config.js`:

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### 🎯 Add Tailwind to CSS

In `src/index.css`:

```
@import "tailwindcss";
```

---

## 🧪 Example Tailwind Usage

```
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Click Me
</button>
```

---

##  UI Highlights

* Dark theme design
* Minimal and clean layout
* Smooth hover interactions
* Professional SaaS-style UI

---

## 🔮 Future Improvements

* ✅ Task completion checkbox
* 📊 Progress tracker
* 🔍 Search & filter tasks
* 🌗 Dark/Light mode toggle
* ☁️ Backend integration (MERN Stack)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Rushi Patel**

---

⭐ If you like this project, don't forget to star the repo!
