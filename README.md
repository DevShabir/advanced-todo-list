# 📝 Advanced Todo List

A modern, interactive, and responsive **Todo List application** built with **HTML5, CSS3, and Vanilla JavaScript**.

This project was created to practice real-world frontend development concepts such as DOM manipulation, event handling, Local Storage, filtering, animations, inline editing, and responsive design.

## ✨ Features

* ➕ Add new tasks
* ⌨️ Add tasks using the **Enter** key
* ✅ Mark tasks as completed
* ✏️ Edit tasks by double-clicking
* 🗑️ Delete tasks with a smooth animation
* 🔍 Filter tasks:

  * All
  * Active
  * Completed
* 💾 Save tasks using **Local Storage**
* 🔄 Restore tasks automatically after refreshing the page
* 📊 Display the number of active tasks
* 📱 Fully responsive design
* 📲 Mobile-friendly interface
* 💻 Optimized for desktop, tablet, and mobile screens
* 🎨 Modern and clean user interface
* ⚡ Built with pure JavaScript — no framework required

## 🛠️ Technologies

* **HTML5** — Application structure
* **CSS3** — Styling, animations, and responsive design
* **JavaScript (ES6+)** — Application logic and DOM manipulation
* **Local Storage API** — Persistent task storage
* **Font Awesome** — Icons

## 📂 Project Structure

```text
todo-list/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Open the project

```bash
cd your-repository-name
```

### 3. Run the project

Open the following file in your browser:

```text
index.html
```

No backend, database, or additional installation is required.

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Supported Devices

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile phones
* 📲 Tablets

CSS media queries are used to adapt the layout for smaller screens.

The interface automatically adjusts:

* Input and Add button
* Task filters
* Task list
* Task text
* Delete button
* Edit input
* Spacing and typography

## 💾 Data Storage

Tasks are stored in the browser using the **Local Storage API**.

Each task is represented as an object:

```javascript
{
    text: "Learn JavaScript",
    checked: false
}
```

When a task is completed, the `checked` value becomes `true`.

This data is then used to:

* Restore tasks after page refresh
* Count active tasks
* Filter completed and active tasks
* Save task changes

## 💡 JavaScript Concepts Practiced

This project demonstrates several important JavaScript concepts:

* DOM Selection
* DOM Manipulation
* Event Listeners
* Functions
* Arrays
* Objects
* `forEach()`
* Conditional Statements
* `classList`
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`
* Dynamic Element Creation
* Keyboard Events
* Click Events
* Double-Click Events
* Blur Events
* Animation Events

## 🎯 Project Goals

The main goal of this project was to practice building a complete frontend application using Vanilla JavaScript.

The project focuses on understanding how different parts of a frontend application work together:

```text
User Input
    ↓
JavaScript Logic
    ↓
DOM Manipulation
    ↓
Local Storage
    ↓
UI Update
```

## 📸 Screenshots

You can add screenshots of the application here:

```markdown
![Todo List Screenshot](screenshots/todo-list.png)
```

## 🔮 Future Improvements

Possible features for future versions:

* [ ] Dark mode
* [ ] Task priorities
* [ ] Due dates
* [ ] Search tasks
* [ ] Clear completed tasks
* [ ] Drag and drop tasks
* [ ] Task categories
* [ ] Better animations
* [ ] Improved accessibility
* [ ] Backend integration
* [ ] User authentication

## 👨‍💻 Author

**Sayed Shabir Hossini**

Frontend Developer | JavaScript & React Learner

## 📄 License

This project is open-source and available for learning and educational purposes.
