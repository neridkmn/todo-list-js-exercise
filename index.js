// Arrays to keep track of each task's state
// implement is allowing each task to have a description.
// You could create a new description array for that and modify the newTask function:
// const taskTitles = [];
// const taskComplete = [];
// const taskDescripions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescripions.push(description);
//   taskComplete.push(false);
// }

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};



//Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// };

// const title = taskTitles[taskIndex];
// const complete = taskComplete[taskIndex];

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  task.complete = true;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box."); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
