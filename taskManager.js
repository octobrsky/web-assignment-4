export class Task {
  constructor(id, title, completed = false) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.title = title;
    this.completed = completed;
  }

  // Returns a new Task instance with inverted completed status
  toggle() {
    return new Task(this.id, this.title, !this.completed);
  }
}

export class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  // Immutable task setter
  setTasks(newTasks) {
    this.tasks = [...newTasks];
  }

  // Immutable task addition
  addTask(task) {
    this.tasks = [...this.tasks, task];
  }

  // Immutable task removal
  removeTask(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  // Immutable task toggle
  toggleTask(taskId) {
    this.tasks = this.tasks.map((t) => {
      if (t.id === taskId) {
        return t.toggle();
      }
      return t;
    });
  }
}
