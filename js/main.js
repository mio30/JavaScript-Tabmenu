'use strict';

const li = document.querySelectorAll('li');

li.forEach(item => {
  item.addEventListener('click', () => {

    li.forEach(active => {
      active.classList.remove('active_li');
    });
    item.classList.add('active_li');

    document.querySelectorAll('.hidden').forEach(main => {
      main.classList.remove('active');
    });
    document.getElementById(item.dataset.id).classList.add('active');
    document.getElementById(item.dataset.id).classList.add('animation');
  });
});
