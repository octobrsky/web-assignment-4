# Assignment 4 - Dynamic Task Dashboard

A client-side task dashboard application built with vanilla JavaScript, modern DOM manipulation APIs, simulated asynchronous server fetching, and immutable state updates.

## File Organization
- `index.html`: Defines the layout structure including action controls, status paragraph, and task list container.
- `styles.css`: Minimal styles for task alignment and visual distinction (line-through) for completed items.
- `taskManager.js`: Contains the `Task` class with an immutable `id` property and the `TaskManager` class enforcing non-destructive array operations.
- `api.js`: Simulates an asynchronous server request returning sample task data after 1500ms using Promises.
- `main.js`: Glues the components together, handles async data fetching, applies JSON parsing requirements, and dynamically renders DOM elements.

## Challenges Faced
- **Enforcing Immutability:** Ensuring state transitions avoid direct array mutation required utilizing methods like `.map()`, `.filter()`, and array spread syntax across all operations.
- **JSON Processing Constraint:** Converted raw fetched data to a JSON string and parsed it back before initializing `Task` instances to satisfy serialization requirements.
- **Dynamic DOM Handling:** Bound event listeners directly during DOM creation with `createElement` and `appendChild` without relying on inline HTML event attributes.
