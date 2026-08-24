const todoInput = document.querySelector('.header input[type="text"]');
const addBtn = document.querySelector('.addBtn');
const taskList = document.querySelector('.taskList');
const taskCount = document.querySelector('.task-count');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    updateCounter();
    filterTasks();
});
// Add Task Events
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
// Filter Buttons
filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach((b) => {
            b.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        currentFilter = e.currentTarget.getAttribute('data-filter');

        filterTasks();
    });
});
// Add Task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        todoInput.style.borderColor = '#ef4444';
        setTimeout(() => {
            todoInput.style.borderColor = '#e2e8f0';
        }, 1500);
        return;
    }
    createTaskElement(taskText, false, true);
    saveTaskToLocalStorage(taskText, false);
    todoInput.value = '';
    todoInput.focus();
    updateCounter();
    filterTasks();
}
// Create Task Element
function createTaskElement(text, isChecked, animate = false) {

    // Create LI
    const li = document.createElement('li');
    // Task Text
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    textSpan.className = 'task-text';
    textSpan.style.flex = '1';
    textSpan.style.cursor = 'pointer';
    li.appendChild(textSpan);

    // Checked Status
    if (isChecked) {
        li.classList.add('checked');
    }
    // Animation
    if (animate) {
        li.classList.add('task-fade-in');
    }
    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    // IMPORTANT:
    // Use textContent/innerHTML correctly for Font Awesome
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(deleteBtn);

    // Toggle Complete
    textSpan.addEventListener('click', () => {
        if (!li.classList.contains('editing')) {
            li.classList.toggle('checked');
            updateLocalStorage();
            updateCounter();
            filterTasks();
        }
    });


    // Double Click Editing
    textSpan.addEventListener('dblclick', () => {
        // Don't edit completed task
        if (li.classList.contains('checked')) {
            return;
        }

        // Prevent opening multiple editors
        if (li.classList.contains('editing')) {
            return;
        }

        li.classList.add('editing');
        const currentText = textSpan.textContent;

        // Create input
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = currentText;
        // Replace span with input
        li.replaceChild(editInput, textSpan);
        editInput.focus();
        editInput.select();

        // Save Edit
        const saveEdit = () => {
            const newText = editInput.value.trim();
            if (newText !== '') {
                textSpan.textContent = newText;
                li.replaceChild(textSpan, editInput);
                li.classList.remove('editing');
                updateLocalStorage();
            } else {
                // Restore old text
                textSpan.textContent = currentText;
                li.replaceChild(textSpan, editInput);
                li.classList.remove('editing');
            }
        };

        // Enter = Save
        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });
        // Click outside = Save
        editInput.addEventListener('blur', saveEdit);
    });
    // Delete Task
    deleteBtn.addEventListener('click', () => {
        li.classList.remove('task-fade-in');
        li.classList.add('task-fade-out');
        li.addEventListener('animationend', () => {
            li.remove();
            updateLocalStorage();
            updateCounter();
        }, { once: true });
    });


    // Add To List
    taskList.appendChild(li);
}

// Filter Tasks
function filterTasks() {
    const items = taskList.querySelectorAll('li');
    items.forEach((item) => {
        const isCompleted = item.classList.contains('checked');
        switch (currentFilter) {
            case 'all':
                item.style.display = 'flex';
                break;
            case 'active':
                item.style.display = !isCompleted ? 'flex' : 'none';
                break;
            case 'completed':
                item.style.display = isCompleted ? 'flex' : 'none';
                break;
        }
    });
}


// Update Counter
function updateCounter() {
    const tasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];
    const activeTasks = tasks.filter((task) => !task.checked).length;
    taskCount.textContent =
        `${activeTasks} task${activeTasks !== 1 ? 's' : ''} left`;
}


// Save New Task
function saveTaskToLocalStorage(text, isChecked) {

    let tasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];

    tasks.push({
        text: text,
        checked: isChecked
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



// Update LocalStorage
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.taskList li').forEach((li) => {
        const textNode = li.querySelector('.task-text');
        let text;
        if (textNode) {
            text = textNode.textContent;
        } else {
            const editInput = li.querySelector('.edit-input');
            text = editInput ? editInput.value : '';
        }
        tasks.push({
            text: text,
            checked: li.classList.contains('checked')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Load Tasks
function loadTasks() {
    const tasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];
    tasks.forEach((task) => {
        createTaskElement(
            task.text,
            task.checked,
            false
        );

    });
}
