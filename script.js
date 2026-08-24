const todoInput = document.querySelector('.header input[type="text"]');
const addBtn = document.querySelector('.addBtn');
const taskList = document.querySelector('.taskList');
const taskCount = document.querySelector('.task-count');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // updateCounter();
});
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        filterTasks();
    });
});
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        todoInput.style.borderColor = '#ef4444';
        setTimeout(() => todoInput.style.borderColor = '#e2e8f0', 1500);
        return;
    }
    createTaskElement(taskText, false, true);
    saveTaskToLocalStorage(taskText, false);

    todoInput.value = '';
    todoInput.focus();
    updateCounter();
    filterTasks();
}
function createTaskElement(text, isChecked, animate = false) {
    const li = document.createElement('li');

    // Create a separate text container inside <li> for handling clicks and double-clicks
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    textSpan.className = 'task-text';
    textSpan.style.flex = '1';
    textSpan.style.cursor = 'pointer';
    li.appendChild(textSpan);

    if (isChecked) li.classList.add('checked');
    if (animate) li.classList.add('task-fade-in');

    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);
    // Toggle status (Completed / Active) on single click
    textSpan.addEventListener('click', () => {
        if (!li.classList.contains('editing')) {
            li.classList.toggle('checked');
            updateLocalStorage();
            updateCounter();
            filterTasks();
        }
    });
    // ADVANCED FEATURE: Inline Editing on Double Click
    textSpan.addEventListener('dblclick', () => {
        if (li.classList.contains('checked')) return; // Do not edit completed tasks

        li.classList.add('editing');
        const currentText = textSpan.textContent;

        // Create an input box over the text
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = currentText;

        // Replace text span with input box temporarily
        li.replaceChild(editInput, textSpan);
        editInput.focus();
        // Save logic function
        const saveEdit = () => {
            const newText = editInput.value.trim();
            if (newText !== '') {
                textSpan.textContent = newText;
                li.replaceChild(textSpan, editInput);
                li.classList.remove('editing');
                updateLocalStorage();
            } else {
                // If empty, restore old text
                textSpan.textContent = currentText;
                li.replaceChild(textSpan, editInput);
                li.classList.remove('editing');
            }
        };
        // Save on Enter or when clicking outside (Blur)
        editInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') saveEdit(); });
        editInput.addEventListener('blur', saveEdit);
    });
    // Soft delete logic with animation
    deleteBtn.addEventListener('click', () => {
        li.classList.remove('task-fade-in');
        li.classList.add('task-fade-out');

        li.addEventListener('animationend', () => {
            li.remove();
            updateLocalStorage();
            updateCounter();
        });
    });
    taskList.appendChild(li);
}
function filterTasks() {
    const items = taskList.querySelectorAll('li');
    items.forEach(item => {
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
function updateCounter() {
    const activeTasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks')).filter(t => !t.checked).length
        : 0;
    taskCount.textContent = `${activeTasks} task${activeTasks !== 1 ? 's' : ''} left`;
}
function saveTaskToLocalStorage(text, isChecked) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push({ text, checked: isChecked });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.taskList li').forEach(li => {
        const textNode = li.querySelector('.task-text');
        // If it's currently being edited, read from input value instead
        const text = textNode ? textNode.textContent : li.querySelector('.edit-input').value;
        tasks.push({
            text: text,
            checked: li.classList.contains('checked')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.checked, false);
    });
}
