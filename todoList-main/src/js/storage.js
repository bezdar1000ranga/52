import Project from './project.js';

export default class Storage {
  constructor(key) {
    this.key = key;
    this.storageData = localStorage.getItem(key);
    this.initialData = this.storageData
      ? JSON.parse(this.storageData)
      : {
          projectArray: [],
        };
  }

  saveData(item) {
    const projectArray = item;
    console.log(item);
    const data = { projectArray };
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getData() {
    if (this.initialData.projectArray.length === 0) {
      this.initialData.projectArray.push(
        new Project('default', 'default', [], [], [], []),
      );
      this.saveData(this.initialData.projectArray);
    } else {
      this.initialData.projectArray.forEach((element, index) => {
        element = new Project(
          element.title,
          element.desc,
          element.firstColumn,
          element.secondColumn,
          element.thirdColumn,
          element.fourthColumn,
        );
        this.initialData.projectArray[index] = element;
      });
    }
    return this.initialData.projectArray;
  }

  log() {
    console.log(this.initialData.projectArray);
  }
}
