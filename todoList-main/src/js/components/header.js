import catalogPage from '../pages/catalogPage';

const HeaderComp = () => {
  const getDisplay = document.getElementById('content');

  const getHeader = document.getElementById('header');
  const createLink = document.createElement('nav');
  createLink.textContent = 'all projects';
  createLink.classList.add('header-link');
  createLink.addEventListener('click', () => {
    cleanDisp(getDisplay);
    catalogPage();
  });

  getHeader.appendChild(createLink);
  function cleanDisp(div) {
    while (div.firstChild) {
      div.removeChild(div.lastChild);
    }
  }
};

export default HeaderComp;
