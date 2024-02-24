import Todo from './todo.js';

export default class Project {
  constructor(title, desc, first, second, third, fourth) {
    this.title = title;
    this.desc = desc;
    this.firstColumn = first;
    this.secondColumn = second;
    this.thirdColumn = third;
    this.fourthColumn = fourth;
  }

  createTodo(name, desc, dueDate, priority) {
    const newTodo = new Todo(name, desc, dueDate, priority);
    this.firstColumn.push(newTodo);
  }

  moveToInProgress(item) {
    this.firstColumn = this.firstColumn.filter((t) => t !== item);
    this.secondColumn.push(item);
  }

  moveToTesting(item) {
    this.secondColumn = this.secondColumn.filter((t) => t !== item);
    this.thirdColumn.push(item);
  }

  moveToDone(item) {
    this.thirdColumn = this.thirdColumn.filter((t) => t !== item);
    this.fourthColumn.push(item);
    this._checkExpire(item);
  }

  _checkExpire(item) {
    const itemDate = new Date(item.dueDate);
    const nowDate = new Date();
    if (itemDate < nowDate) {
      item.expired = true;
    } else {
      item.expired = false;
    }
  }

  deleteTodo(array, item) {
    const index = array.findIndex((t) => t === item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
