
const workBtnContainer = document.querySelector('.bookmark_filter');
const projectConainer = document.querySelector('.filter_wrappers');
const projects = document.querySelectorAll('.filter_body');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    //remove seleciton
    const active = document.querySelector('.filter_item.active');
    active.classList.remove('active');
    e.target.classList.add('active');


    projects.forEach((project) => {
        if (filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });

});
