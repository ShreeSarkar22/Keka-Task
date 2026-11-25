const taskRepository = require("../repositories/taskRepository");

function createTask(data) {
    // Validation
    if (!data.phone || typeof data.phone !== "string") {            //if (!data || typeof data !== "object" || Array.isArray(data))
        const error = new Error("Phone number is required");
        error.statusCode = 400;
        throw error;
    }
    // const {type1, type2 = "default", ... , typen} = data
    if (data.phone.trim().length === 0) {
        const error = new Error("Phone number cannot be empty");
        error.statusCode = 400;
        throw error;
    }

    const validPhone = ["9830083322","5623891478"];

    const phone = data.phone;

    if (!validPhone.includes(phone)) {
        const error = new Error("Invalid phone");
        error.statusCode = 400;
        throw error;
    }

    return taskRepository.create({
        phone: data.phone.trim(),
        createdAt : new Date().toISOString()
    });
}

// function getAllTasks() {
//     return taskRepository.findAll();
// }

function getOrderById(){
  return taskRepository.findById();
}

module.exports = {
    createTask,
    getOrderById
};

// const taskData = {
//     title: title.trim(),
//     description: description.trim(),
//     priority,
//     status: "pending",
//     createdAt: new Date().toISOString(),
//   };

//   const task = taskRepository.create(taskData);

//   logger.info(`Task created: ${task.id}`);

//   return task;

/*If array here
  items: items.map((item) => ({
      name: item.name.trim(),
      quantity: item.quantity,
      price: item.price,
    })), */


/*function updateTaskStatus(id, data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    const error = new Error("Invalid request body");
    error.statusCode = 400;
    throw error;
  }

  const { status } = data;


  const allowedStatuses = ["pending", "in_progress", "completed"];

  if (!allowedStatuses.includes(status)) {
    const error = new Error("Invalid status");
    error.statusCode = 400;
    throw error;
  }


  const task = taskRepository.findById(id);

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  if (task.status === status) {
    return task;
  }

  // Define allowed transitions
  const allowedTransitions = {
    pending: ["in_progress"],
    in_progress: ["completed"],
    completed: [],
  };

  // Check whether transition is allowed
  if (!allowedTransitions[task.status].includes(status)) {
    logger.warn(
      `Invalid status transition for task ${id}: ${task.status} -> ${status}`
    );

    const error = new Error(
      `Cannot change status from ${task.status} to ${status}`
    );

    error.statusCode = 409;
    throw error;
  }

  // Update task
  const updatedTask = taskRepository.update(id, { status });

  logger.info(`Task status updated: ${id} -> ${status}`);

  return updatedTask;
}*/

// Operations
// const totalAmount = prices.reduce((sum, current) => sum + current, 0);