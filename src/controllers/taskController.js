const taskService = require("../services/taskService");
const logger = require("../utils/logger");

function createTask(req, res, next) {
    try {
        const task = taskService.createTask(req.body);

        logger.info("Task created", {
            taskId: task.id
        });

        return res.status(201).json({
            success: true,
            data: task
        });

    } catch (error) {
        next(error);
    }
}

// function getAllTasks(req, res, next) {
//     try {
//         const tasks = taskService.getAllTasks();

//         return res.status(200).json({
//             success: true,
//             count: tasks.length,
//             data: tasks
//         });

//     } catch (error) {
//         next(error);
//     }
// }

function getOrderById(req, res, next) {
  try {
    const { id } = req.params;

    const order = orderService.getOrderById(id);

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
    createTask,
    getOrderById
};

