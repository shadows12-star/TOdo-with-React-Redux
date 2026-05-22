# ✅ Todo App with React & Redux

A fully functional **To-Do List** application built with **React.js** and **Redux** for centralized state management. This project demonstrates how to manage application state predictably using the Redux pattern.

---


## 📸 Screenshot

<img width="2169" height="666" alt="image" src="https://github.com/user-attachments/assets/7f8ad4ac-fde4-4340-b897-403a9743e235" />


## ✨ Features

- ➕ Add new tasks
- ✔️ Toggle tasks as complete / incomplete
- 🗑️ Delete individual tasks
- 🧹 Clear all completed tasks
- 🔍 Filter tasks — All / Active / Completed
- 🔄 Centralized state management with Redux
- 💾 Persistent state via localStorage (if applicable)
- 📱 Fully responsive UI

---

## 🧰 Tech Stack

| Technology        | Purpose                        |
|-------------------|--------------------------------|
| React.js          | UI component library           |
| Redux             | Global state management        |
| Redux Toolkit     | Simplified Redux setup         |
| React-Redux       | React bindings for Redux       |
| JavaScript (ES6+) | Application logic              |
| CSS               | Styling                        |

---

## 🗂️ Project Structure

```
TOdo-with-React-Redux/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── FilterButtons.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── todosSlice.js      # Redux slice (actions + reducer)
│   │   └── selectors.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🔄 Redux Flow

```
User Action (UI)
      ↓
  Dispatch Action
      ↓
   Reducer
      ↓
  Redux Store
      ↓
React Component Re-renders
```

The app uses a single Redux store with a `todos` slice that handles all task-related actions: adding, toggling, deleting, and filtering todos.

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/shadows12-star/TOdo-with-React-Redux.git
cd TOdo-with-React-Redux
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. Open your browser at `http://localhost:3000`

---

## 📦 Build for Production

```bash
npm run build
```

Generates an optimized production build in the `build/` folder.

---

## 📚 What I Learned

- Setting up a Redux store with **Redux Toolkit**
- Writing **reducers** and **actions** using `createSlice`
- Connecting Redux state to React components with `useSelector` and `useDispatch`
- Managing **derived state** with selectors
- Structuring a scalable React + Redux project

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**shadows12-star**  
GitHub: [@shadows12-star](https://github.com/shadows12-star)

---

> ⭐ If this project helped you understand React + Redux, consider giving it a star!
