import '../sass/index.scss';

window.onload = () => {
  console.log('hello world');

  // Cache DOM
  const projects = document.getElementsByClassName('project-wrapper');
  const buttonWrappers = document.getElementsByClassName('project-buttons');

  let projectHeight = projects[0].getBoundingClientRect().height;

  [...projects].forEach(project => {
    const projectText = project.querySelector('.project-text');
    const techButtons = project.getElementsByClassName('tech-button');
    console.log(techButtons);

    project.addEventListener('mouseenter', e => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      projectText.style.transform = `translateY(-${projectHeight}px)`;
      [...techButtons].forEach(techButton => {
        techButton.style.transform = 'translateY(0px)';
        techButton.style.opacity = '1';
      });
    });
    project.addEventListener('mouseleave', e => {
      e.stopPropagation();
      projectText.style.transform = `translateY(0px)`;
      [...techButtons].forEach(techButton => {
        techButton.style.transform = 'translateY(16px)';
        techButton.style.opacity = '0';
      });
    });
  });

  window.onresize = () => {
    projectHeight = projects[0].getBoundingClientRect().height;
  };
};
