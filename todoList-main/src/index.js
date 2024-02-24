import './css/main.css';

import projectPage from './js/pages/projectPage.js';
import HeaderComp from './js/components/header.js';

window.onload = () => {
  HeaderComp();
  projectPage(0);
};
