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
