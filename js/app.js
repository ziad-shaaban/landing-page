let sectionElements = document.querySelectorAll('section');
let navItems = document.getElementById('navbar__list');

// 1. add section title to the bar
for (let i =0; i < sectionElements.length; i++) {
    let list = document.createElement('li');
    list.innerHTML += `<a data-link='${sectionElements[i].id}'class=''>${sectionElements[i].id}</a>`;
    navItems.appendChild(list);
}

// 2. chamge active class to current section
window.onscroll = ()=> {
sectionElements.forEach((element) => {
    if (element.getBoundingClientRect().top <= 100 && element.getBoundingClientRect().top > -390){
        document.querySelector('.your-active-class').className = '';
        element.className = "your-active-class";
    }
});
};

// 3. smooth scrolling and active anchor 
document.querySelectorAll('a').forEach((element) => {
    element.addEventListener('click', ()=> {
        document.getElementById(`${element.getAttribute('data-link')}`).scrollIntoView({behavior: "smooth", block: "center"});
        document.querySelectorAll('a').forEach((item) => {
            item.className = ''
            element.className = 'active';
        });
    });
    });

