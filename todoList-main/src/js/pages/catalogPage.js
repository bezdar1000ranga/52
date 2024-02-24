import Storage from '../storage';
import projectPage from './projectPage';
import Project from '../project';

const storage = new Storage('note-app');
const data = storage.getData();

const catalogPage = function () {
  const getDisplay = document.getElementById('content');
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'title';

  const descInput = document.createElement('input');
  descInput.type = 'text';
  descInput.placeholder = 'desc';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';

  form.appendChild(titleInput);
  form.appendChild(descInput);

  form.appendChild(submitButton);
  getDisplay.appendChild(form);
  loadProjects();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const desc = descInput.value;

    data.push(new Project(title, desc, [], [], [], []));
    storage.saveData(data);
    loadProjects();

    titleInput.value = '';
    descInput.value = '';
  });
};

export default catalogPage;
console.log();
function loadProjects() {
  clearDisplay();
  const getDisplay = document.getElementById('content');
  for (let i = 0; i < data.length; i++) {
    const createNewProjectTitle = document.createElement('div');
    const createNewProjectDesc = document.createElement('div');
    const createNewGroup = document.createElement('div');
    createNewProjectTitle.textContent = data[i].title;
    createNewProjectDesc.textContent = data[i].desc;
    createNewProjectTitle.classList.add('project-title');
    createNewProjectDesc.classList.add('project-desc');
    createNewGroup.classList.add('project');
    createNewGroup.dataset.projectName = data[i].title;
    createNewGroup.appendChild(createNewProjectTitle);
    createNewGroup.appendChild(createNewProjectDesc);
    createNewGroup.addEventListener('click', () => {
      projectPage(i);
    });
    getDisplay.appendChild(createNewGroup);
  }
}

function clearDisplay() {
  const getAllProjects = document.getElementById('content');
  while (getAllProjects.children.length > 1) {
    getAllProjects.children[1].remove();
  }
}
