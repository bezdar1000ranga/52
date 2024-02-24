export default class Todo {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priorityNumber = priority.priority;
    this.priorityText = priority.text;
    this.expired = null;
  }
}
