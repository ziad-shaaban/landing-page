let sectionElements = document.querySelectorAll('section');
let navItems = document.getElementById('navbar__list');

// 1. add section title to the bar:
/*
 * looping through all sections to get the header title which equal to section id.
 * create an list item and then create anchor tag with data-link and empty class
 *  then append li and a tags to the ul 
*/ 
for (let i =0; i < sectionElements.length; i++) {
    let list = document.createElement('li');
    list.innerHTML += `<a data-link='${sectionElements[i].id}'class=''>${sectionElements[i].id}</a>`;
    navItems.appendChild(list);
}

// 2. chamge active class to current section
/**
 * using function onscroll to cahnge the active class from section one to any section view in the viewport
 * to know that i'm reach section x i use getBoundClientRect().top to get the position of the section relative to viewport
 * then change class ('.your-active-class') to the section appear on the vieport 
 * also loop through all a tags to set class prop to none and then get the a tage which data-link value = id of the section and give it the active class.
 */
window.onscroll = ()=> {
sectionElements.forEach((element) => {
    if (element.getBoundingClientRect().top <= 100 && element.getBoundingClientRect().top > -390){
        document.querySelector('.your-active-class').className = '';
        element.className = "your-active-class";
        document.querySelectorAll('a').forEach(item => {
            item.classList = '';
            if (item.getAttribute('data-link') === element.id) {
                item.className = 'active';
            }
        })
    }
});
};

// 3. smooth scrolling and active anchor 
/**
 * looping through all a tags then set an event listener.
 * then get the section which i need to scoll to it by getting the value of the data-link attribute of a tag
 * using scrollIntoView method to scroll to the section smoothly.
 * to make a tage in the active state i loop through all a tags and then set all clss name to '' and to the matched a 'active'
 */
document.querySelectorAll('a').forEach((element) => {
    element.addEventListener('click', ()=> {
        document.getElementById(`${element.getAttribute('data-link')}`).scrollIntoView({behavior: "smooth", block: "center"});
        document.querySelectorAll('a').forEach((item) => {
            item.className = ''
            element.className = 'active';
        });
    });
    });

