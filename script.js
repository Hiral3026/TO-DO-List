// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navigationLinks = document.querySelectorAll('.navigation ul li a');
    const taskLists = document.querySelectorAll('.task-list-container');
    const addTaskBtn = document.getElementById('add-task-btn');

    navigationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetList = e.target.getAttribute('data-list');
            const activeLink = document.querySelector('.navigation ul li.active');
            const activeList = document.querySelector('.task-list-container.active');

            if (activeLink) {
                activeLink.classList.remove('active');
            }
            if (activeList) {
                activeList.classList.remove('active');
            }

            e.target.parentElement.classList.add('active');
            document.getElementById(targetList).classList.add('active');
            document.getElementById('list-title').textContent = e.target.textContent;
        });
    });

    addTaskBtn.addEventListener('click', () => {
        const taskInput = document.getElementById('new-task-input');
        const taskText = taskInput.value.trim();

        if (taskText) {
            const activeList = document.querySelector('.task-list-container.active');
            const task = document.createElement('div');
            task.className = 'task';

            const span = document.createElement('span');
            span.textContent = taskText;
            task.appendChild(span);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '×';
            deleteBtn.addEventListener('click', function () {
                task.remove();
            });
            task.appendChild(deleteBtn);

            activeList.appendChild(task);

            taskInput.value = '';
        }
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function () {
            button.parentElement.remove();
        });
    });
});
