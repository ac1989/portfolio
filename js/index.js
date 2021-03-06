import throttle from 'lodash/throttle';
import '../sass/index.scss';
import './polyfills';

window.onload = () => {
  // Cache DOM
  const projects = document.getElementsByClassName('project-wrapper');
  const buttonWrappers = document.getElementsByClassName('project-buttons');
  const techButtons = document.getElementsByClassName('tech-button');
  let projectHeight = projects[0].getBoundingClientRect().height;

  // Variables
  const colors = {
    github: '#f2f2f2',
    react: '#61dafb',
    redux: '#744cbc',
    'redux-saga': '#89d96d',
    emotion: '#d26ac2',
    mui: '#2196f3',
    javascript: '#1a1a1a'
  };

  // Project Hover Animations
  [...projects].forEach(project => {
    const projectText = project.querySelector('.project-text');
    const techButtons = project.getElementsByClassName('tech-button');

    project.addEventListener('mouseenter', e => {
      projectText.style.transform = `translateY(-${projectHeight}px)`;
      [...techButtons].forEach(techButton => {
        techButton.style.transform = 'translateY(0px)';
        techButton.style.opacity = '1';
      });
    });
    project.addEventListener('mouseleave', e => {
      projectText.style.transform = `translateY(0px)`;
      [...techButtons].forEach(techButton => {
        techButton.style.transform = 'translateY(16px)';
        techButton.style.opacity = '0';
      });
    });
  });

  // Tech Button Ripple Animations
  [...techButtons].forEach(techButton => {
    let tech = techButton.classList[1].substring(7);

    let ripple = document.createElement('div');
    ripple.style.opacity = 0;
    ripple.style.background = colors[tech] || '#f2f2f2';
    ripple.style.position = 'absolute';
    ripple.style.left = 0;
    ripple.style.width = '100%';
    ripple.style.paddingTop = '100%';
    ripple.style.top =
      techButton.getBoundingClientRect().height -
      techButton.getBoundingClientRect().width;
    ripple.style.borderRadius = '50%';
    ripple.style.animation = 'ripple 0.6s linear';

    techButton.addEventListener('mouseenter', e => {
      techButton.appendChild(ripple);
    });
    techButton.addEventListener('mouseleave', () => {
      ripple.parentNode.removeChild(ripple);
    });
  });

  window.onresize = throttle(() => {
    projectHeight = projects[0].getBoundingClientRect().height;
  }, 400);
};
