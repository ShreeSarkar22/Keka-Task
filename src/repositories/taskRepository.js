const { randomUUID } = require("crypto");

const tasks = new Map();
// const arr = [];
let nextId = 100000;
function create(taskData) {
    const task = {
        id: nextId++,                       // id : nextId++,
        ...taskData,
        createdAt: new Date().toISOString()
    };

    tasks.set(task.id,task);                   // arr.push(task);

    return task;
}

// function findAll() {
//     return Array.from(tasks.values());          // return arr
// }

function findById(id) {
    return tasks.get(id);
}

// function update(id, updates) {
//     const existingTask = tasks.get(id);

//     if (!existingTask) {
//         return null;
//     }

//     const updatedTask = {
//         ...existingTask,
//         ...updates
//     };

//     tasks.set(id, updatedTask);

//     return updatedTask;
// }

// function remove(id) {
//     return tasks.delete(id);
// }

module.exports = {
    create,
    findById
};