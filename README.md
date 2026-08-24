# 📝 Advanced Todo List

A modern and interactive **Todo List application** built with **HTML, CSS, and Vanilla JavaScript**.

This project focuses on practicing DOM manipulation, event handling, Local Storage, filtering, animations, and inline task editing without using any JavaScript framework.

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
* 💾 Save tasks in **Local Storage**
* 🔄 Automatically restore tasks after refreshing the page
* 📊 Display the number of active tasks
* 🎨 Responsive and modern UI
* ⚡ Built with pure JavaScript — no framework required

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Local Storage API**
* **Font Awesome**

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

Navigate to the project directory:

```bash
cd your-repository-name
```

### 3. Run the project

Simply open:

```text
index.html
```

in your browser.

No backend or additional installation is required.

## 💡 How It Works

Tasks are stored in the browser's **Local Storage**, allowing them to remain available even after refreshing or reopening the page.

Each task contains:

```javascript
{
    text: "Learn JavaScript",
    checked: false
}
```

When a task is completed, its `checked` value changes to `true`.

The application then uses this information to:

* Update the task counter
* Apply the completed style
* Filter tasks
* Save the new state to Local Storage

## 🎯 Main JavaScript Concepts Practiced

This project was created to practice important JavaScript concepts such as:

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
* JSON
* Dynamic Element Creation
* Keyboard Events
* Double-Click Events
* Animation Events

## 📸 Screenshots

Add screenshots of your project here:

```markdown
![Todo List Screenshot](screenshots/todo-list.png)
```

## 🔮 Future Improvements

Possible features for future versions:

* [ ] Task priorities
* [ ] Due dates
* [ ] Search tasks
* [ ] Dark mode
* [ ] Drag and drop tasks
* [ ] Clear completed tasks
* [ ] Edit task button
* [ ] Task categories
* [ ] Better mobile optimization

## 👨‍💻 Author

**Sayed Shabir Hossini**

Frontend Developer | JavaScript & React Learner

## 📄 License

This project is open-source and available for learning and educational purposes.
